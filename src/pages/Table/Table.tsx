import {  Table } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export const TableVideo = () => {
  const columns = [
    { title: "stt", dataIndex: "stt", key: "stt", },
    { title: "Video", dataIndex: "video", key: "video" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (item: any) => {
        console.log("item: ", item);
        let path = `/video/${item.videoId}`;
        return <Link to={path}>Xem video</Link>
      },
    },
  
  ];


  const [listCourses, setListCourses] = React.useState([]);
  const [curCourse, setCurCourse] = React.useState(19);
  const [listVideos, setListVideos] = React.useState([]);

  const getListCourses = async () => {
    let listCoursesResponse = await axios.get(`http://117.6.60.82:3000/api/courses_detail/${curCourse}`);
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
    getListCourses()
  }, []);
  return <Table columns={columns} dataSource={listVideos} />;
};
