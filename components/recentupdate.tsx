import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const updates = [
  {
    id: 1,
    title: "Enhancing Emergency Preparedness",
    date: "June 23, 2023",
    comments: 2,
    image:
      "/1.jpg",
  },
  {
    id: 2,
    title: "The Importance Of Patient Advocacy",
    date: "June 23, 2023",
    comments: 2,
    image:
      "/2.jpg",
  },
  {
    id: 3,
    title: "Standing With Patients Beyond The Clinic",
    date: "June 23, 2023",
    comments: 1,
    image:
      "/3.jpg",
  },
  {
    id: 4,
    title: "Doctors Driving Multidisciplinary Research",
    date: "June 23, 2023",
    comments: 1,
    image:
      "/4.jpg",
  },
]

export default function RecentUpdates() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Recent Updation</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Accumsan lacus vel facilisis volutpat est velit egestas dui id. Adipiscing elit duis tristique sollicitudin
          nibh sit amet commodo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {updates.map((update) => (
          <Card key={update.id} className="border border-blue-600 overflow-hidden">
            <CardHeader className="p-0">
              <Image src={update.image} alt={update.title} className="w-full h-48 object-cover" width={500} height={300} />
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span>{update.date}</span>
                <span>•</span>
                <span>{update.comments} Comments</span>
              </div>
              <h3 className="text-blue-600 font-semibold text-xl mb-4">{update.title}</h3>
            </CardContent>
            <CardFooter>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2" size="sm">
                READ MORE
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

