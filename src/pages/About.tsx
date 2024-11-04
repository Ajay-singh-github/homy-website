import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, Flag, HelpCircle, Star } from "lucide-react"

const About = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <h1 className="secondaryFont text-4xl md:text-5xl font-serif text-red-500 mb-12">
        About Homy
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Who We Are? Card */}
        <Card className="border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-semibold">
              <HelpCircle className="h-6 w-6 text-red-500" />
              Who We Are?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <p>
              Homy is a dedicated team of culinary enthusiasts and nutrition
              experts passionate about transforming the way people experience home
              cooking. We understand the challenges of meal planning and
              preparation, and we&apos;re here to simplify the process for you.
            </p>
          </CardContent>
        </Card>

        {/* Our Mission Card */}
        <Card className="border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-semibold">
              <Flag className="h-6 w-6 text-red-500" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <p>
              At Homy, we believe that everyone deserves delicious, home-cooked
              meals tailored to their taste and dietary needs. Our mission is to
              make cooking accessible and enjoyable by providing personalized meal
              plans and expert chef services right at your doorstep.
            </p>
          </CardContent>
        </Card>

        {/* Our Values Card */}
        <Card className="border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-semibold">
              <Star className="h-6 w-6 text-red-500" />
              Our Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="font-semibold">Quality:</span> We prioritize
                fresh, high-quality ingredients and professional culinary
                standards.
              </li>
              <li>
                <span className="font-semibold">Convenience:</span> Our services
                are designed to fit seamlessly into your busy lifestyle.
              </li>
              <li>
                <span className="font-semibold">Community:</span> We strive to
                build a community of cooking enthusiasts who share their love for
                good food and healthy living.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* What We Offer? Card */}
        <Card className="border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-semibold">
              <ClipboardList className="h-6 w-6 text-red-500" />
              What We Offer?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="font-semibold">Professional Chef Services:</span>{" "}
                Skilled chefs who come to your home to prepare meals based on your
                selected plan and schedule.
              </li>
              <li>
                <span className="font-semibold">Personalized Meal Plans:</span>{" "}
                Customized meal options that cater to your preferences and health
                goals.
              </li>
              <li>
                <span className="font-semibold">Meal Planning Made Easy:</span> Our
                user-friendly app allows you to schedule meals, choose recipes, and
                manage your dietary needs effortlessly.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default About