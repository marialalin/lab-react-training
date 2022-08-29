import Greetings from './data/components/greetings/Greetings';
import IdCard from './data/components/id-card/IdCard';
import Random from './data/components/random/Random';
import BoxColor from './data/components/box-color/BoxColor';

function App() {
  return (
    <div className="container mt-3">
      <div className="mb-5">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender={false}
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender={true}
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <div className="mb-5">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <div className="mb-5">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
    </div>
  );
}

export default App;
