import { useState } from "react";
import { Carousel, Form, Button } from "react-bootstrap";

export const Vis = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71",
    "https://plus.unsplash.com/premium_photo-1676637000264-b9abea8cf2a9",
  ];
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("The answer will be generated here");
  const onSubmit = (image) => {
    console.log(image);
    //use question in body to send request
    //result in setReportContent
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
            <Button className="mt-3" onClick={() => onSubmit(image)}>
              Ask Question
            </Button>
          </Carousel.Item>
        ))}
        {/* <div>Ask Question</div> */}
      </Carousel>
    </div>
  );
};
