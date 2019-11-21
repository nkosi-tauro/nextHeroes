import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <h1>{props.characters.name}</h1>
    {/* <p>{props.characters.summary.replace(/<[/]?[pb]>/g, '')}</p> */}

    <img src={props.characters.images.lg} />
    <h3>Power Stats</h3>
    <ul>
        <li>Intelligence : {props.characters.powerstats.intelligence}</li>
        <li> Strength : {props.characters.powerstats.strength}</li>
        <li>Speed : {props.characters.powerstats.speed}</li>
        <li>Power : {props.characters.powerstats.power}</li>
    </ul>

    <h3>Biography</h3>
    <ul>
        <li>Name : {props.characters.biography.fullName}</li>
        <li>Alter Egos: {props.characters.biography.alterEgos}</li>
        <li>Publisher :{props.characters.biography.publisher}</li>
        <li>Good or Bad: {props.characters.biography.alignment}</li>
    </ul>

    
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
  console.log(res)
  const characters = await res.json();

  console.log(`Fetched characters: ${characters.name}`);

  return { characters };
};

export default Post;