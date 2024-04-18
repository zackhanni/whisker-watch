import ProfileCard from "./components/ProfileCard";
import { Dog, Cat } from "./components/AnimalClasses";

export default function Home() {
  // demo Dog instance
  const dogAshWoodin = new Dog(
    "Ash Wooden",
    2,
    ["Meg Woodin", "Hal Woodin"],
    "Unknown",
    false
  );

  // const dogAshWoodinPlain = {
  //   name: dogAshWoodin.name,
  //   age: dogAshWoodin.age,
  //   owner: dogAshWoodin.owner,
  //   breed: dogAshWoodin.breed,
  //   walked: dogAshWoodin.walked,
  //   behaviorIssues: dogAshWoodin.behaviorIssues,
  // };

  //Next steps 4/17/24
  // put this information on a server for further testing and manipulation. create a server object for dogAshWoodin

  return (
    <main className="flex justify-center items-center h-screen w-full">
      {/* <ProfileCard currentAnimal={dogAshWoodinPlain} /> */}
      hello there
    </main>
  );
}
