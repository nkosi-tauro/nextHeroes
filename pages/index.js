import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>All Known Superheros</h1>
    <div id="container">
    <ul className="grid">
      {props.shows.map(characters => (
        <li key={characters.id}>
          <Link href="/p/[id]" as={`/p/${characters.id}`}>
            <a>{characters.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    </div>
      <style jsx>{`
      #container ul { list-style: none; }
      #container .grid li { float: left; width: 20%; height: 50px; border-right: 1px dotted #CCC; border-bottom: 1px dotted #CCC; padding: 20px; }
      `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api/all.json');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry)
    
  };
  
};

export default Index;
