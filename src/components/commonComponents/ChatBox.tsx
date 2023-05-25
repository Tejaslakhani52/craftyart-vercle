import ChatIcon from "@mui/icons-material/Chat";
import React, { useState, useRef, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import api from "../../services/api";
import SmallLogo from "../../style/images/Icons/craftysmall.png";
import { consoleShow } from "../../commonFunction/console";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ChatBox() {
  const [open, setOpen] = useState(false);
  const [uId, setuId] = useState<any>("");
  const [chatDataList, setChatDataList] = useState<any>([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [messageData, setmessageData] = useState<any>({
    user_id: "",
    message: null,
    width: 0,
    height: 0,
    brand: "crafty",
    is_file: 0,
    photo_uri: null,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setImagePreview(null);
  };
  const inputRef = useRef<any>(null);

  useEffect(() => {
    const getData = localStorage.getItem("userProfile");
    setuId(getData);
    setmessageData({
      ...messageData,
      user_id: getData,
    });
  }, []);

  const fetchData = async () => {
    const getChatData: any = await api.getChat({
      key: "qwfsegxdhbxfjhncf",
      user_id: uId,
    });
    const myElement = document.getElementById("chat");
    if (myElement) {
      if (myElement) {
        const { scrollTop, scrollHeight, clientHeight } = myElement;
        const scrollOffset = scrollHeight - (clientHeight + scrollTop);
        myElement.scrollTop = scrollHeight - (clientHeight + scrollOffset);
      }
    }
    setChatDataList(getChatData?.data);
    consoleShow("getChatData", getChatData);
  };

  useEffect(() => {
    fetchData();
  }, [uId]);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl: any = URL.createObjectURL(selectedFile);
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        const width = img.width;
        const height = img.height;
        setImagePreview(imageUrl);
        setmessageData({
          ...messageData,
          width,
          height,
          photo_uri: selectedFile,
          is_file: 1,
          message: selectedFile.name,
        });
      };
    }
  };

  const sendMeassage = (event: any) => {
    event.preventDefault();
    const getNewMessage: any = api
      .sendMessage({
        key: "qwfsegxdhbxfjhncf",
        ...messageData,
      })
      .then((res) => {
        fetchData();
        setmessageData({
          ...messageData,
          message: null,
          width: 0,
          height: 0,
          brand: "crafty",
          is_file: 0,
          photo_uri: null,
        });

        const myElement = document.getElementById("chat");
        if (myElement) {
          if (myElement) {
            const { scrollTop, scrollHeight, clientHeight } = myElement;
            const scrollOffset = scrollHeight - (clientHeight + scrollTop);
            myElement.scrollTop = scrollHeight - (clientHeight + scrollOffset);
          }
        }
      });
    setImagePreview(null);
    consoleShow("sendNewMessage", getNewMessage);
  };
  const getData = localStorage.getItem("userProfile");

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{ display: getData ? "block" : "none" }}
      >
        <ChatIcon
          sx={{
            color: "white",
            fontSize: "50px",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background:
              "linear-gradient(268.03deg, #5961F8 -0.66%, #5961F8 -0.65%, #497DEC 22.41%, #15D8C5 100%, #15D8C5 100%)",
            padding: "10px",
            borderRadius: "50%",
            zIndex: "500",
          }}
        />
      </Button>

      {open && (
        <div
          className=""
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "1000",
          }}
        >
          <div className="chat">
            <div className="contact bar">
              <div className="pic stark">
                <img src={SmallLogo} alt="" />
              </div>
              <div className="name">Crafty Art</div>
              {/* <div className="seen">Today at 12:56</div> */}

              <i
                className="fa-solid fa-xmark"
                style={{
                  position: "absolute",
                  right: "11px",
                  fontSize: "25px",
                  top: "11px",
                  cursor: "pointer",
                  color: "#2ec5b6",
                }}
                onClick={handleClose}
              ></i>
            </div>
            {imagePreview ? (
              <img
                src={imagePreview}
                style={{ maxWidth: "200px", margin: "auto" }}
              />
            ) : (
              <div className="messages" id="chat">
                {/* <div className="time">Today at 11:41</div> */}
                {chatDataList?.map((chat: any, index: number) =>
                  chat?.from_user ? (
                    <div key={index}>
                      <div
                        className="message parker"
                        style={{
                          padding: chat?.is_file ? "0" : "0.5rem 1rem",
                          backgroundColor: chat?.is_file
                            ? "transparent"
                            : "#2ec5b6",
                        }}
                      >
                        {chat?.is_file ? (
                          <img
                            src={chat?.url + chat.message}
                            alt=""
                            style={{
                              maxHeight: "150px",
                              width: "100%",
                              borderRadius: "1.125rem 1.125rem 0 1.125rem",
                            }}
                          />
                        ) : (
                          <>{chat?.message}</>
                        )}
                      </div>
                      <p
                        style={{
                          marginLeft: "auto",
                          width: "114px",
                          marginTop: "-18px",
                          fontSize: "10px",
                        }}
                      >
                        {chat?.created_at}
                      </p>
                    </div>
                  ) : (
                    <div className="message stark">
                      {chat?.is_file ? (
                        <img src={chat.message} alt="" />
                      ) : (
                        chat?.message
                      )}
                    </div>
                  )
                )}

                {/* <div className="message stark">
                <div className="typing typing-1"></div>
                <div className="typing typing-2"></div>
                <div className="typing typing-3"></div>
              </div> */}
              </div>
            )}
            <div className="input">
              <i
                className="fa-solid fa-paperclip"
                onClick={handleIconClick}
              ></i>
              <input
                type="file"
                onChange={handleFileChange}
                ref={inputRef}
                style={{ display: "none" }}
              />
              {/* <i className="far fa-laugh-beam"></i> */}
              <input
                placeholder="Type your message here!"
                type="text"
                value={messageData?.message == null ? "" : messageData?.message}
                onChange={(e) =>
                  setmessageData({ ...messageData, message: e.target.value })
                }
                onKeyPress={(e) => e.key === "Enter" && sendMeassage(e)}
              />
              {(messageData?.message || messageData?.photo_uri) && (
                <i
                  className="fa-solid fa-paper-plane"
                  onClick={sendMeassage}
                ></i>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
