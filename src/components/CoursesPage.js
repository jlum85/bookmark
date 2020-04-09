import React, { useState, useEffect } from "react";
import LoadingGif from "../components/LoadingGif";
import axios from "axios";
import CardBookmark from "../components/CardBookmark";
import { API_GET_BOOKMARK, token } from "../utils/Global";

const CoursesPage = (props) => {
  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(course);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_GET_BOOKMARK, {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        });
        setCourse([...response.data]);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        alert("An error occured !!");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Courses</h2>

      {isLoading ? (
        <LoadingGif title="Chargement en cours" />
      ) : (
        <div className="headerSynthese">
          {course.map((item, index) => {
            return <CardBookmark key={index} item={item} />;
          })}
        </div>
      )}
    </>
  );
};

export default CoursesPage;
