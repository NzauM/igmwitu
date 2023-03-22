import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
function Viewposts() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch("http://127.0.0.1:4000/posts")
      .then((resp) => resp.json())
      .then((data) => setPosts(data));  
  }, []);

  // Click on like button to add to the likes table; post_id as id of post and user_id as 1 for now
  
  function handleLike(e){
    const form_data = new FormData()
    form_data.append("post_id",e.target.value)
    form_data.append("user_id", 1)
    fetch("http://127.0.0.1:4000/likes",{
      method: "POST",
      body: form_data
    })
    .then((res)=>{
      if(res.ok){
        console.log("Added")
      }
      else{
        console.log("Error")
      }
    })
  }

  console.log(posts);

  let postslist;

  if (posts.length > 0) {
    postslist = posts.map((elem, ind) => {
      return (
        <Col key={ind} md={4}>
        <div >
          <img height={300} width={250} src={elem.image_url} alt="Post pic" />
          <h2>{elem.caption}</h2>
          {elem.tags.length > 0 ? <ul>{elem.tags.map((tag)=><li>{tag.name}</li>)}</ul> : ""}
          
          <Button value={elem.id} onClick={handleLike} variant="info">Like Post {elem.total_likes}</Button>
        </div>
        </Col>
      );
    });
  } else {
    postslist = <h1>No Posts at the moment. Add some here</h1>;
  }

  return (
    <>
      Our Posts Today
      <Row>
      {postslist}
      </Row>
      
    </>
  );
}

export default Viewposts;
