import PublicGallery from "@/components/PublicGallery";

export const dynamic = "force-dynamic";

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-12 px-4 py-10">
      <h1 className="text-4xl font-extrabold">Stateline Renegades Gallery</h1>

      <PublicGallery team="org" title="Organization Gallery" />
      <PublicGallery team="karma" title="Karma Gallery" />
      <PublicGallery team="riot" title="Riot Gallery" />
      <PublicGallery team="anarchy" title="Anarchy Gallery" />
      <PublicGallery team="mayhem" title="Blessed Mayhem Gallery" />
      <PublicGallery team="tball" title="T-Ball Gallery" />
    </main>
  );
}
