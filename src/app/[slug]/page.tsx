import { allTreatments } from "@/data/treatments";
import TreatmentPageTemplate from "@/components/TreatmentPageTemplate";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return allTreatments.map((treatment) => ({
        slug: treatment.slug,
    }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function DynamicTreatmentPage({ params }: PageProps) {
    const { slug } = await params;
    const treatment = allTreatments.find((t) => t.slug === slug);

    if (!treatment) {
        notFound();
    }

    // Mapping category to human readable name for breadcrumb
    const categoryLabels: Record<string, { label: string; href: string }> = {
        skin: { label: "Skin", href: "/skin" },
        hair: { label: "Hair", href: "/hair" },
        facial: { label: "Facial Aesthetics", href: "/facial" },
        body: { label: "Body Contouring", href: "/body" },
    };

    const cat = categoryLabels[treatment.category] || { label: "Services", href: "/services" };

    const breadcrumb = [
        { label: "Home", href: "/" },
        { label: cat.label, href: cat.href },
        { label: treatment.title }
    ];

    return <TreatmentPageTemplate treatment={treatment} breadcrumb={breadcrumb} />;
}
