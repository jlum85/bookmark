import React, { useState, useEffect } from "react";
import LoadingGif from "../components/LoadingGif";
import axios from "axios";
import CardBookmark from "../components/CardBookmark";
import FilterBar from "../components/FilterBar";
import { API_GET_BOOKMARK, token } from "../utils/Global";

const CoursesPage = (props) => {
  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tags, setTags] = useState([]);

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

        setTags(
          response.data.reduce((acc, item) => {
            if (item.tag) {
              item.tag.forEach((val) => {
                if (acc.indexOf(val) === -1) {
                  acc.push(val);
                }
              });
            }
            return acc;
          }, [])
        );

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
      <FilterBar tags={tags} />
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
