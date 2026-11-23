import { describe, expect, it } from "vitest";
import { contentItems, contentBySlug } from "@/data/content";
import { caseStudies, caseStudyBySlug } from "@/data/caseStudies";
import { education } from "@/data/skills";
import { headlineStat, profile } from "@/data/profile";
import { navItems } from "@/components/site/nav";

describe("portfolio accuracy rules", () => {
  it("the 19M figure belongs to one specific Short with its own link", () => {
    const short = contentBySlug("the-artist-mode-fade-haircut");
    expect(short?.metrics[0]?.value).toBe("19M");
    expect(short?.url).toBe("https://www.youtube.com/shorts/3tl3vXdl5_Y");
    expect(headlineStat.url).toBe("https://www.youtube.com/shorts/3tl3vXdl5_Y");
  });

  it("the million-view Shorts show exactly the displayed view counts", () => {
    const views = contentItems.filter((c) => c.viral).map((c) => c.metrics[0]?.value);
    expect(views).toEqual(["19M", "3M", "2.3M", "2.2M", "1.5M", "1.2M"]);
  });

  it("The Artist Mode shows the YouTube Studio lifetime figures", () => {
    const values = caseStudyBySlug("the-artist-mode")?.results?.metrics.map((m) => m.value);
    expect(values).toEqual(["3.9Cr", "32,905", "82.9K", "+33K", "62,756"]);
  });

  it("Anna Adarsh shows the corrected cost per lead of ₹160", () => {
    const cs = caseStudyBySlug("anna-adarsh-womens-college");
    expect(cs?.highlight?.value).toBe("₹160");
    const values = cs?.results?.metrics.map((m) => m.value);
    expect(values).toEqual(["₹160", "24.8L", "1.04Cr"]);
  });

  it("TopAll is the first project and its primary CTA is the free portal", () => {
    expect(caseStudies[0]?.slug).toBe("topall");
    expect(caseStudies[0]?.ctas?.[0]?.url).toBe("https://prep.topall.app/");
    expect(caseStudies[0]?.creatives?.cta?.url).toBe("https://prep.topall.app/");
  });

  it("projects follow the requested order", () => {
    expect(caseStudies.map((c) => c.slug)).toEqual([
      "topall",
      "vvt-coaching",
      "the-artist-mode",
      "anna-adarsh-womens-college",
      "anna-adarsh-group-of-schools",
      "dr-vikram-agarwal-adarsh-college",
      "style-365",
      "asta-properties",
      "ambrig-homes",
      "sofa-42",
      "neet-guide",
      "colan-infotech",
    ]);
  });

  it("Style 365 shows the ₹3,00,000 budget only as a reference", () => {
    const ref = caseStudyBySlug("style-365")?.budgetReference;
    expect(ref?.label).toBe("Campaign Budget Reference");
    expect(ref?.value).toBe("₹3,00,000");
    expect(caseStudyBySlug("style-365")?.results).toBeUndefined();
  });

  it("the Chondrichthyes guide links to TopAll and to YouTube", () => {
    const item = contentBySlug("topall-class-chondrichthyes-guide");
    expect(item?.url).toBe("https://prep.topall.app/neet/biology/animal-kingdom/videos/class-chondrichthyes-guide-topall");
    expect(item?.secondaryLinks?.[0]?.url).toMatch(/^https:\/\/www\.youtube\.com\/watch\?v=/);
  });

  it("supplied creatives keep their supplied views and links", () => {
    expect(contentBySlug("dr-vikram-agarwal-college-student-reel")?.metrics[0]?.value).toBe("11.3K");
    expect(contentBySlug("dr-vikram-agarwal-college-student-reel")?.url).toBe("https://www.instagram.com/p/DdY2cFKztu4/");
    expect(contentBySlug("asta-properties-aerial-location-reel")?.metrics[0]?.value).toBe("3,431");
    expect(contentBySlug("asta-properties-aerial-location-reel")?.url).toBe("https://www.instagram.com/reel/DSSPWyUku9g/");
    expect(contentBySlug("ambrig-homes-korattur-location-post")?.url).toBe("https://www.instagram.com/p/DaCtOoOjbeW/?img_index=1");
  });

  it("no unverified Meta ad creatives are shown for the Anna Adarsh projects", () => {
    expect(caseStudyBySlug("anna-adarsh-womens-college")?.creatives).toBeUndefined();
    expect(caseStudyBySlug("anna-adarsh-group-of-schools")?.creatives).toBeUndefined();
    expect(caseStudyBySlug("anna-adarsh-group-of-schools")?.results).toBeUndefined();
  });

  it("Colan Infotech includes official verified public links", () => {
    const colan = caseStudyBySlug("colan-infotech");
    expect(colan?.links.map((l) => l.url)).toContain("https://www.colaninfotech.com/");
    expect(colan?.links.map((l) => l.url)).toContain("https://www.linkedin.com/company/colan-infotech-private-limited/home/");
    expect(colan?.learnings.length).toBeGreaterThan(0);
  });

  it("the CavinKare page is gone from navigation", () => {
    expect(navItems.map((n) => n.to as string)).not.toContain("/cavinkare");
  });

  it("contact details match the resume", () => {
    expect(profile.contact.phone).toBe("+91 88382 60761");
    expect(profile.contact.email).toBe("ramkumarmanoharan5@gmail.com");
    expect(profile.contact.linkedin).toBe("https://www.linkedin.com/in/ramkumar-m-940791209/");
  });

  it("the BBA is shown as in progress, expected 2027", () => {
    const bba = education.find((e) => e.title.includes("BBA"));
    expect(bba?.status).toBe("Currently pursuing");
    expect(bba?.year).toBe("2024 to 2027 (expected)");
  });

  it("content links point to individual pieces, never to a profile page", () => {
    for (const item of contentItems) {
      if (!item.url || item.format === "Channel") continue;
      expect(item.url).not.toMatch(/youtube\.com\/@|instagram\.com\/[^/]+\/?$/);
    }
  });
});
