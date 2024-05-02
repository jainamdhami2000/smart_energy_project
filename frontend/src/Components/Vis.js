import { useState } from "react";
import { Carousel, Form, Button } from "react-bootstrap";

export const Vis = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71",
    "https://plus.unsplash.com/premium_photo-1676637000264-b9abea8cf2a9",
  ];
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("The answer will be generated here");
  const onSubmit = async (image) => {
    try {
      setAnswer("Loading...");
      const url = `http://localhost/5000/image?id=${imageId}`;
      const data = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: question }),
      });
      const response = await data.json();
      setAnswer(response);
    } catch (err) {
      console.log(err);
      setAnswer("Error");
    }
  };
  return (
    <div>
      <Carousel slide={false} style={{ height: "400px" }} interval={null}>
        {images.map((image) => (
          <Carousel.Item key={image}>
            <img
              className="d-block w-100"
              src={image}
              alt="First slide"
              style={{ objectFit: "cover", height: "400px", width: "400px" }}
            />
            <Form.Control
              type="text"
              placeholder="Ask your question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              className="mt-3"
            />
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              value={answer}
              style={{ height: "200px", marginTop: "10px" }}
              disabled
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              <Button onClick={() => onSubmit(image)}>Ask Question</Button>
            </div>
          </Carousel.Item>
        ))}
        {/* <div>Ask Question</div> */}
      </Carousel>
    </div>
  );
};
