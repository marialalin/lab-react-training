import Greetings from './data/components/greetings/Greetings';
import IdCard from './data/components/id-card/IdCard';

function App() {
  return (
    <div className="container mt-3">
      <div className="mb-3">
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
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
    </div>
  );
}

export default App;



