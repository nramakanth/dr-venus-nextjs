import { allTreatments } from "@/data/treatments";
import TreatmentPageTemplate from "@/components/TreatmentPageTemplate";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return allTreatments.map((treatment) => ({
        slug: treatment.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const treatment = allTreatments.find((t) => t.slug === slug);

    if (!treatment) {
        return {
            title: "Treatment Not Found | Dr. Venus",
            description: "The requested treatment page could not be found.",
            alternates: {
                canonical: "/",
            },
        };
    }

    return {
        title: `${treatment.title} | Dr. Venus`,
        description: treatment.description,
        keywords: [
            treatment.title,
            `${treatment.category} treatment`,
            "dermatology clinic Hyderabad",
            "skin and hair treatment",
            "Dr Venus Institute",
        ],
        alternates: {
            canonical: `/${treatment.slug}`,
        },
    };
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
