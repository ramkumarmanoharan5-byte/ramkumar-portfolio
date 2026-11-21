import { describe, expect, it } from "vitest";
import { contentItems, contentBySlug } from "@/data/content";
import { caseStudyBySlug } from "@/data/caseStudies";
import { education } from "@/data/skills";
import { headlineStat } from "@/data/profile";

describe("portfolio accuracy rules", () => {
  it("the 19M+ figure belongs to one specific Short with its own link", () => {
    const short = contentBySlug("the-artist-mode-fade-haircut");
    expect(short?.metrics[0]?.value).toBe("19M+");
    expect(short?.url).toBe("https://www.youtube.com/shorts/3tl3vXdl5_Y");
    expect(headlineStat.url).toBe("https://www.youtube.com/shorts/3tl3vXdl5_Y");
  });

  it("Anna Adarsh shows exactly the reported campaign figures", () => {
    const values = caseStudyBySlug("anna-adarsh-womens-college")?.dashboard?.map((m) => m.value);
    expect(values).toEqual(["₹7.04L", "2,461", "₹286.08", "24.8L", "1.04Cr"]);
  });

  it("the BBA is shown as in progress, expected 2027", () => {
    const bba = education.find((e) => e.title.includes("BBA"));
    expect(bba?.status).toBe("Currently pursuing");
    expect(bba?.year).toBe("Expected 2027");
  });

  it("pieces without supplied details carry no results", () => {
    for (const item of contentItems.filter((c) => c.status === "awaiting-details")) {
      expect(item.metrics).toHaveLength(0);
    }
  });

  it("content links point to individual pieces, never to a profile page", () => {
    for (const item of contentItems) {
      if (!item.url) continue;
      expect(item.url).not.toMatch(/youtube\.com\/@|instagram\.com\/[^/]+\/?$/);
    }
  });
});
