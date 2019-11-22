import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <div className="container">
      <div className="row">
        <h1>{props.characters.name}</h1>
        <div class="col s6 polaroid">
          <img src={props.characters.images.lg} style={{width: 25 + '%'}}  />
          <div class="heading">
            {/* <p>{props.characters.name}</p> */}
          </div>
        </div>
        <style jsx>{`
.polaroid {
  width: 80%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
}
.heading{
  text-align: center;
  padding: 10px 20px;
}

`}</style>
        <div className="col s6">
          <h3>Biography</h3>
          <ul>
            <li>Name : {props.characters.biography.fullName}</li>
            <li>Alter Egos: {props.characters.biography.alterEgos}</li>
            <li>Publisher :{props.characters.biography.publisher}</li>
            <li>Good or Bad: {props.characters.biography.alignment}</li>
          </ul>
        </div>
        <div className="col s6">
          <h3>Power Stats</h3>
          <ul>
            <li>Intelligence : {props.characters.powerstats.intelligence}</li>
            <li> Strength : {props.characters.powerstats.strength}</li>
            <li>Speed : {props.characters.powerstats.speed}</li>
            <li>Power : {props.characters.powerstats.power}</li>
          </ul>
        </div>


      </div>
    </div>
  </Layout>
);

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
  console.log(res)
  const characters = await res.json();

  console.log(`Fetched characters: ${characters.name}`);

  return { characters };
};

export default Post;