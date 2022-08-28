import IdCard from './data/components/id-card/IdCard';

function App() {
  return (
    <div className="container mt-3">
      <div className="mb-3">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender={false}
          height={Number(178)/100}
          birth={ new Date("1992-07-14").toLocaleDateString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender={true}
          height={Number(172)/100}
          birth={ new Date("1988-05-11").toLocaleDateString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
    </div>
  );
}

export default App;
