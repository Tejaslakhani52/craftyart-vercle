import axios, { AxiosInstance } from "axios";
import { AllDataRoot } from "../interfaces/AllDataObject";
import { CatDataRoot } from "../interfaces/CatDataObject";
import { consoleShow } from "../commonFunction/console";

class ApiService {
  base: AxiosInstance;
  base2: AxiosInstance;

  constructor() {
    this.base = axios.create({
      baseURL: "https://craftyverse.in/templates/api/",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: false,
    });

    this.base2 = axios.create({
      baseURL: "https://craftyverse.in/payment/",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: false,
    });
  }

  createUser = (props: {
    key: string;
    user_id: string;
    name: string;
    email: string;
    login_type: string;
    device_id: any;
    utm_medium: string;
    utm_source: string;
  }) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/create/user", props)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  };

  getUser = (props: { key: string; device_id: string; email: any }) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/get/user", props)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          console.log("err: ", err);
          reject(err);
        });
    });
  };

  updateUser = (props: {
    key: string;
    name: string;
    user_id: string;
    updateDp: string;
    photo_uri: any;
  }) => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("key", props?.key);
      formData.append("name", props?.name);
      formData.append("user_id", props?.user_id);
      formData.append("updateDp", props?.updateDp);
      formData.append("photo_uri", props?.photo_uri);

      this.base
        .post("V3/updateUser", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          consoleShow("updateUsererro", error);
        });
    });
  };

  // updateUser = (props: {
  //   key: string;
  //   name: string;
  //   user_id: string;
  //   updateDp: string;
  //   photo_uri: any;
  // }) => {
  //   console.log("photo_uri: ", props?.photo_uri);
  //   return new Promise((resolve, reject) => {
  //     const formData = new FormData();
  //     formData.append("key", props?.key);
  //     formData.append("name", props?.name);
  //     formData.append("user_id", props?.user_id);
  //     formData.append("updateDp", props?.updateDp);
  //     formData.append("file", props?.photo_uri);

  //     axios
  //       .post("/update/user", formData)
  //       .then((response) => {
  //         resolve(response);
  //       })
  //       .catch((error) => {
  //         console.log("error: ", error);
  //         // consoleShow(error);
  //       });
  //   });
  // };

  // updateUser = (props: {
  //   key: string;
  //   name: string;
  //   user_id: string;
  //   updateDp: string;
  //   photo_uri: any;
  // }) => {
  //   const { key, name, user_id, updateDp, photo_uri } = props;
  //   console.log("photo_uri: ", photo_uri);

  //   return new Promise((resolve, reject) => {
  //     axios
  //       .post("/update/user", {
  //         key,
  //         name,
  //         user_id,
  //         updateDp,
  //         file: photo_uri,
  //       })
  //       .then((response) => {
  //         consoleShow("response: ", response);
  //         resolve(response);
  //       })
  //       .catch((error) => {
  //         consoleShow("error", error);
  //       });
  //   });
  // };

  getDatas = (props: {
    key: string;
    page: number;
    count: number;
  }): Promise<AllDataRoot> => {
    return new Promise((resolve, reject) => {
      axios
        .post("/get/main/data", props)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  };

  getCategoryDatas = (props: {
    debug_key: string;
    cat_id: number;
    limit: number;
    page: number;
  }): Promise<CatDataRoot> => {
    return new Promise((resolve, reject) => {
      axios
        .post("/get/datas", props)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  };

  payemnt = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      this.base2
        .post("razorpay", {
          packageId: 16,
          packageName: "crafty",
          rate: 69.0,
          currency: "INR",
          pay_mode: "subs",
          fromWallet: 0,
          user_id: "aesfawfswtgswg",
        })
        .then(({ data }) => {
          consoleShow("payment", data);
        })
        .catch((err) => reject(err));
    });
  };

  getChat = (props: { key: string; user_id: string }) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/get/chat", props)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  };

  sendMessage = (props: {
    key: string;
    user_id: string;
    message: string;
    width: any;
    height: any;
    brand: string;
    is_file: any;
    photo_uri: any;
  }) => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("key", props?.key);
      formData.append("user_id", props?.user_id);
      formData.append("message", props?.message);
      formData.append("width", props?.width);
      formData.append("height", props?.height);
      formData.append("brand", props?.brand);
      formData.append("is_file", props?.is_file);
      formData.append("photo_uri", props?.photo_uri);

      this.base
        .post("V3/sendMessage", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          consoleShow("sendmessage", error);
        });
    });
  };

  // sendMessage = (props: {
  //   key: string;
  //   user_id: string;
  //   message: string;
  //   width: any;
  //   height: any;
  //   brand: string;
  //   is_file: any;
  //   photo_uri: any;
  // }) => {
  //   return new Promise((resolve, reject) => {
  //     const formData = new FormData();
  //     formData.append("key", props?.key);
  //     formData.append("user_id", props?.user_id);
  //     formData.append("message", props?.message);
  //     formData.append("width", props?.width);
  //     formData.append("height", props?.height);
  //     formData.append("brand", props?.brand);
  //     formData.append("is_file", props?.is_file);
  //     formData.append("photo_uri", props?.photo_uri);

  //     axios
  //       .post("/send/message", formData, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       })
  //       .then((response) => {
  //         resolve(response);
  //       })
  //       .catch((error) => {
  //         consoleShow(error);
  //       });
  //   });
  // };

  getSearchData = (props: {
    key: string;
    app_id: any;
    cat_id: any;
    keywords: string;
    device: any;
    refWidth: any;
    refHeight: any;
    page: any;
    debug: string;
  }): any => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("key", props?.key);
      formData.append("app_id", props?.app_id);
      formData.append("cat_id", props?.cat_id);
      formData.append("keywords", props?.keywords);
      formData.append("device", props?.device);
      formData.append("refWidth", props?.refWidth);
      formData.append("refHeight", props?.refHeight);
      formData.append("page", props?.page);
      // formData.append("debug", props?.debug);
      this.base
        .post("V4/searchTemplates", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  };
}

export default new ApiService();

// exe --disable-web-security --disable-gpu --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp
