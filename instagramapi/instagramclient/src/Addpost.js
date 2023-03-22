import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState, useEffect } from "react";

function Addpost() {
    const[post,setPost]= useState("")
    const[caption, setCaption] = useState("")
    const[tags, setTags] = useState([])
    const[selectedtags, setSelectedTags] = useState([])


    useEffect(()=>{
      fetch("http://127.0.0.1:4000/tags").then((resp)=>resp.json()).then((tags)=>setTags(tags))
    },[])

    // console.log(JSON.stringify(selectedtags))
   


    const handleSubmitPost = (e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", post, "randomuserpost")
        formData.append("caption", caption)
        formData.append("user_id", 1)
        formData.append("tags", JSON.stringify(selectedtags))

        fetch("http://127.0.0.1:4000/posts", {
            method: "POST",
            body:formData 
        })
        .then((res)=>{
            if(res.ok){
                console.log("Form successfully submitted")
                window.location.reload(true)
            }
            else{
                throw new Error("Bad Network Response")
            }
        })
        .catch((err)=>{
            console.log(err)
        })

    }
  return (
    <>
      <div className="App mt-5">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Form onSubmit={handleSubmitPost}>
            <Form.Group className="mb-3" controlId="post">
              <Form.Label>Enter your Post</Form.Label>
              <Form.Control type="file" onChange={(e)=>setPost(e.target.files[0])}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="caption">
              <Form.Label>Caption</Form.Label>
              <Form.Control type="text" onChange={(e)=>setCaption(e.target.value)} placeholder="Caption your post" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Tags</Form.Label>
              {tags.map((tag)=>(
                <Form.Check
                label={tag.name}
                name="tags"
                type="checkbox"
                id={tag.id}
                onChange={(e)=>{
                  if(e.target.checked){
                    setSelectedTags([...selectedtags, tag])
                  }
                  else{
                    setSelectedTags(selectedtags.filter((tags)=>tags !== tag))
                  }
                }}
              />
              ))}
            </Form.Group>
           {/* <Form.Group className="mb-3" controlId="tags">
              <Form.Label>Tags</Form.Label>
              {tags.map((item,ind)=>{
                return(
                  <Form.Check key={ind}
                  inline
                  label={item.name}
                  name="chosentags"
                  type="checkbox"
                  id={`inline-checkbox-${ind}`}
                  onChange={(e)=>{
                    if(e.target.checked){
                      setselectedtags([...selectedtags, item])
                    }
                    else{
                      setselectedtags(selectedtags.filter((tag)=>tag !== item))
                    }
                  }}
                />
                )
              })}
            </Form.Group> */}

            <Button variant="primary" type="submit">
              Submit
            </Button>
            </Form>

            {/* <input className="mt-3" type="file" /> */}
          </div>
      </div>
    </>
  );
}

export default Addpost;
