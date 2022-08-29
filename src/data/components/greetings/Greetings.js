import './Greetings.css';

function Greetings({ lang, children }) {
  switch (lang) {
    case 'en':
      return <div className="greetings-box mb-3"><p>Hello {children}</p></div>;
    case 'de':
      return <div className="greetings-box mb-3"><p>Hallo {children}</p></div>;
    case 'fr':
      return <div className="greetings-box mb-3"><p>Bonjour {children}</p></div>;
    default:
      return <p>"blabla"</p>;
  }
}

export default Greetings;


// return (
//   <div className="box">
//     {(() => {
//       switch (lang) {
//         case 'de':
//           return <p>Hallo {children}</p>;
//         case 'fr':
//           return <p>Bonjour {children}</p>;
//         default:
//           return null;
//       }
//     })()}
//   </div>
// );
// }