import AboutPreview from "../components/Home/AboutPreview";
import LuckOfDeversity from "../components/Home/LuckOfDeversity";
import BuildingPathways from "../components/Home/BuildingPathways";
import TrainingPrograming from "../components/Home/TrainingPrograming";
import GetInTouch from "../components/Home/GetInTouch";

function HomePage() {
  return (
    <>
      <main>
        <AboutPreview />
        <LuckOfDeversity />
        <BuildingPathways/>
        <TrainingPrograming/>
        <GetInTouch/>
      </main>
    </>
  );
}

export default HomePage;
