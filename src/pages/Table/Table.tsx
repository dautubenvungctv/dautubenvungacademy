import {  Table } from "antd";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


export const TableVideo = () => {
  


  const [listCourses, setListCourses] = React.useState([]);
  const [curCourse, setCurCourse] = React.useState(19);
  const [listVideos, setListVideos] = React.useState([]);
  let courseId = useParams().courseId;
  const getListCourses = async (courseId: any) => {
    let listCoursesResponse = await axios.get(`http://117.6.60.82:3000/api/courses_detail/${courseId}`);
    let listCourses = listCoursesResponse.data;
    console.log("listCourses: ", listCourses);
    let listVideos = listCourses?.videos?.map((item: any, index: any) => {
      return {
        stt: index + 1,
        video: item,
        videoId: item?.split(" ")[1],
      }
    });
    console.log("listVideos: ", listVideos);
    setListCourses(listCourses);
    setListVideos(listVideos);

  }

  useEffect(() => {
    getListCourses(courseId)
  }, [courseId]);
  const columns = [
    { title: "stt", dataIndex: "stt", key: "stt", },
    { title: "Video", dataIndex: "video", key: "video" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (item: any) => {
        console.log("item: ", item);
        let path = `/video/${courseId}/${item.videoId}`;
        return <Link to={path}>Xem video</Link>
      },
    },
  
  ];
  return <Table columns={columns} dataSource={listVideos} />;
};
