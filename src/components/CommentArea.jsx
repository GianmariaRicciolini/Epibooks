import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYTFjNjRjNTllYzAwMTk5MGQ3MTUiLCJpYXQiOjE3MTA0MjY0NTAsImV4cCI6MTcxMTYzNjA1MH0.by3gpOjiSG1rajbrasJA7RWdqU93EFKfo8mZ0UrnIn8",
          },
        });
        if (response.ok) {
          const fetchedComments = await response.json();
          setComments(fetchedComments);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    if (props.asin) {
      fetchComments();
    } else {
      setComments([]);
    }
  }, [props.asin]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
