import React, { useEffect, useState } from "react";
import { StyledMyCourse } from "./styled";
import { Space, Table } from "antd";
import axios from "axios";
import moment from "moment";
export const Mycourse = () => {
  const handleLogOut = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    window.location.reload();
  };
  const [listMyBook, setListMyBook] = useState([]);
  const formatBook = listMyBook.map((item: any) => {
    return { ...item, added_at: moment(item?.added_at).format("DD-MM-YYYY") };
  });

  const [listMyCourse, setListMyCourse] = useState([]);
  const formatCourse = listMyCourse.map((item: any) => {
    return { ...item, added_at: moment(item?.added_at).format("DD-MM-YYYY") };
  });
  const token = localStorage.getItem("token");

  const userID = localStorage.getItem("userID");
  const getListMyCourse = () => {
    axios
      .get(`http://185.250.36.147:3000/my-courses/${userID}`, {
        headers: {
          "Content-Type": "application/json",
          "X-Custom-Header": "foobar",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res1) => {
        setListMyCourse(res1?.data);
      });
  };
  const getListMyBook = () => {
    axios
      .get(`http://185.250.36.147:3000/my-books/${userID}`, {
        headers: {
          "Content-Type": "application/json",
          "X-Custom-Header": "foobar",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res2) => {
        setListMyBook(res2?.data);
      });
  };
  useEffect(() => {
    // getListMyBook();
    getListMyCourse();
  }, [window.location.href]);
  const columns = [
    {
      title: "Ngày",
      dataIndex: "enroll_date",
      render: (_: any, record: any) => {
        return (
          <Space size="middle">
            <div>{record.added_at}</div>
          </Space>
        );
      },
    },
    {
      title: "Tên",
      dataIndex: "title",
    },

    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_: any, record: any) => {
    //     // console.log("_: ", _);
    //     // console.log("record: ", record);
    //     return (
    //       <Space size="middle">
    //         <a>Vào học</a>
    //       </Space>
    //     );
    //   },
    // },
  ];
  const columnsCourse = [
    {
      title: "Ngày",
      dataIndex: "enroll_date",
      render: (_: any, record: any) => {
        console.log("_: ", _);
        console.log("record: ", record);
        return (
          <Space size="middle">
            <div>{record.added_at}</div>
          </Space>
        );
      },
    },
    {
      title: "Tên",
      dataIndex: "title",
    },

    {
      title: "Vào học",
      key: "url_course",
      render: (_: any, record: any) => {
        return (
          <Space size="middle">
            <a target="_plank" href={_.url}>
              Vào học
            </a>
          </Space>
        );
      },
    },
  ];

  return (
    <StyledMyCourse>
      <div className="title-my-course">Khoá học của tôi</div>
      <div className="table-course">
        <Table columns={columnsCourse} dataSource={formatCourse} />
      </div>
      {/* <div className="title-my-course">Sách đã mua của tôi</div>

      <Table columns={columns} dataSource={formatBook} /> */}
      <div className="box-logout">
        <button onClick={handleLogOut} className="btn-logout">
          Đăng xuất
        </button>
      </div>
    </StyledMyCourse>
  );
};
