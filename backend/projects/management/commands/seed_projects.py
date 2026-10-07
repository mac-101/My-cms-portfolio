import shutil

from django.conf import settings
from django.core.management.base import BaseCommand, CommandError
from django.utils.text import slugify

from projects.models import Project, TechStack


PROJECTS = [
    {
        "title": "Style Hub",
        "category": "Fashion E-commerce",
        "description": "Fashion e-commerce platform with product listing, shopping cart, and checkout functionality, order code tracking, and admin dashboard for managing products and orders.",
        "tags": ["React", "Supabase", "Tailwind"],
        "image": "stylehub.png",
        "live_url": "http://stylehub101.netlify.app/",
        "github_url": "https://github.com/mac-101/StyleHub",
        "featured": True,
    },
    {
        "title": "Clever School",
        "category": "Education",
        "description": "A modern, high-performance informational website. It showcases academic programs, campus culture, and admissions to parents and prospective students through a highly accessible, easy-to-navigate interface",
        "tags": ["HTML", "REST API", "CSS", "JavaScript"],
        "image": "cleverschools.png",
        "live_url": "http://cleverkidsschoolsinternational.com.ng/",
        "github_url": "http://github.com/mac-101",
        "featured": True,
    },
    {
        "title": "hybrid security consult",
        "category": "Cybersecurity",
        "description": "(Collaborated) Cybersecurity consulting platform with service offerings, training programs enrollment, client testimonials, contact form for inquiries and admin panel.",
        "tags": ["React", "Node.js", "Tailwind"],
        "image": "hybridsec.png",
        "live_url": "https://www.hybridsecconsult.com/",
        "github_url": "https://github.com/mac-101",
        "featured": True,
    },
    {
        "title": "Essy Kilishi",
        "category": "Brand Site",
        "description": "A beef jerky business site, product showcase, placing order, and gaining trust",
        "tags": ["React", "Tailwind"],
        "image": "essykilishi.png",
        "live_url": "https://essy-kilishi.vercel.app/",
        "github_url": "https://github.com/mac-101/essy-kilishi",
        "featured": False,
    },
    {
        "title": "Smart School OS",
        "category": "School Management",
        "description": "(In production) School manaement system, staff listing, student listing, timetable scheduling, school curriculum, fees tracking.",
        "tags": ["Django", "Python", "React", "DRF", "Postgresql", "Tailwind"],
        "image": "schmanage.png",
        "live_url": "",
        "github_url": "https://github.com/mac-101/school-management-system",
        "featured": True,
    },
    {
        "title": "Glory Bakery & Gallery",
        "category": "Bakery",
        "description": "Online showcase and gallery of cakes with custom orders, team booking slots, and baking academy enrollment.",
        "tags": ["React", "Tailwind"],
        "image": "bakery.png",
        "live_url": "https://glory-bakery.netlify.app/",
        "github_url": "https://github.com/mac-101/glory-bakery",
        "featured": True,
    },
    {
        "title": "PayHaus",
        "category": "Property Management",
        "description": "Rent payment tracking platform helping landlords and tenants manage payments, due dates, and property records.",
        "tags": ["React", "Zustand", "Firebase", "Tailwind"],
        "image": "payhaus.png",
        "live_url": "https://payhaus.netlify.app",
        "github_url": "https://github.com/mac-101/Payhaus",
        "featured": False,
    },
    {
        "title": "BrightPath Academy",
        "category": "Education",
        "description": "A modern, high-performance informational website. It showcases academic programs, campus culture, and admissions to parents and prospective students through a highly accessible, easy-to-navigate interface",
        "tags": ["React", "TypeScript", "Tailwind"],
        "image": "brigthpath.png",
        "live_url": "https://bright-pathacademy.netlify.app",
        "github_url": "https://github.com/mac-101/BrightPath-Academy",
        "featured": False,
    },
    {
        "title": "TastyBite Fast Food",
        "category": "Fast Food",
        "description": "Modern fast food delivery platform with menu management and order tracking.",
        "tags": ["HTML", "CSS", "JavaScript", "Tailwind"],
        "image": "tastybitefastfood.png",
        "live_url": "http://tastybitefastfood.netlify.app",
        "github_url": "https://github.com/mac-101/Tasty-Bite-Restaurant",
        "featured": False,
    },
    {
        "title": "Aba Dev Submit",
        "category": "Event Management",
        "description": "Dev conference event management platform with speaker list, schedule, and registration functionality.",
        "tags": ["HTML", "CSS", "JavaScript", "Tailwind"],
        "image": "abadev.png",
        "live_url": "https://aba-dev-summit.vercel.app/",
        "github_url": "https://github.com/mac-101/Aba-Dev-Summit-2026-landing-page",
        "featured": True,
    },
]


class Command(BaseCommand):
    help = "Populate the database with the portfolio projects and their tech stacks."

    def handle(self, *args, **options):
        assets_dir = (
            settings.BASE_DIR.parent / "My-Portfolio" / "src" / "assets"
        )
        media_dir = settings.MEDIA_ROOT / "projects"
        media_dir.mkdir(parents=True, exist_ok=True)

        for entry in PROJECTS:
            source_image = assets_dir / entry["image"]
            if not source_image.is_file():
                raise CommandError(f"Project image not found: {source_image}")

        project_count = 0
        tech_stack_count = 0
        for entry in PROJECTS:
            image_name = entry["image"]
            shutil.copy2(assets_dir / image_name, media_dir / image_name)

            project, _ = Project.objects.update_or_create(
                slug=slugify(entry["title"]),
                defaults={
                    "title": entry["title"],
                    "category": entry["category"],
                    "description": entry["description"],
                    "image": f"projects/{image_name}",
                    "github_url": entry["github_url"],
                    "live_url": entry["live_url"],
                    "featured": entry["featured"],
                    "published": True,
                },
            )

            tech_stacks = []
            for name in entry["tags"]:
                tech_stack, created = TechStack.objects.get_or_create(
                    slug=slugify(name),
                    defaults={"name": name},
                )
                if created:
                    tech_stack_count += 1
                tech_stacks.append(tech_stack)
            project.tech_stack.set(tech_stacks)
            project_count += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"Seeded {project_count} projects and created "
                f"{tech_stack_count} tech stacks."
            )
        )
