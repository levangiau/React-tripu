import React from "react";
//
 
//
class App extends React.Component{
  // moveClouds=()=>{
  //   /* clouds 1 & 2 move to the left 
  //      clouds 3 & 4 to the right */
  //    for(let i = 1; i < 5; i++){
  //      let cloud = document.getElementById(`cloud${i}`);
  //      console.log("cloud",cloud)
  //      cloud.style.transitionTimingFunction = "ease-out";
  //      cloud.style.transitionDuration = "700ms";
  //      let top =  window.getComputedStyle(cloud, null).getPropertyValue("top");
       
  //       let topValue = parseInt(top);
  //        topValue = topValue - 20;
  //        top = topValue + "px";
      
  //      cloud.style.top = top;
       
  //      let left = window.getComputedStyle(cloud, null).getPropertyValue("left");
  //      let leftValue = parseInt(left);
  //        if(i < 3){
  //          leftValue = leftValue - 30;
  //        }else {
  //          leftValue = leftValue + 30;
  //        }
  //        left = leftValue + "px";
       
  //      cloud.style.left = left;
  //    }
  //  }
    render(){
        return(
          <div>
            <div className="header"
            //  onMouseMove={moveClouds()}
            >
              <div className="container">
                <div className="cloud" id="cloud1">
                  <img src="./image/cloud_PNG16.png" alt=""/>
                </div>
                <div className="cloud" id="cloud2">
                  <img src="./image/cloud_PNG16.png" alt="" />
                </div>
                <div className="cloud" id="cloud3">
                  <img src="./image/cloud_fog_by_moonglowlilly-d5tk3l7.png" alt=""/>
                </div>
                <div className="cloud" id="cloud4">
                  <img src="./image/cloud_fog_by_moonglowlilly-d5tk3l7.png" alt=""/>
                </div>
                <div className="image">
                  <img src="./image/logow2.png" alt="" />
                </div>
                <a href="#content-form" className="headera">
                  <span className="k pulse" />
                  <span className="k pulse" />
                </a>
              </div>
            </div>
            <div className="content-form" id="content-form">
              <div className="container">
                <form>
                  <div className="p">
                    <div className="inner-p">
                      <span className="inner-p-span1">T?? V???n</span>
                    </div>
                    <div className="inner-p">
                      <span className="inner-p-span2">?????t Tour</span>
                    </div>
                  </div>
                  <div className="form-content">
                    <div className="form-group">
                      <label htmlFor="inputPassword2">H??? v?? t??n</label>
                      <input type="text" className="form-control" id="inputPassword2" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPassword2">S??? ??i???n tho???i</label>
                      <input type="text" className="form-control" id="inputPassword2" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPassword2">Email</label>
                      <input type="text" className="form-control" id="inputPassword2" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPassword2">C??u h???i</label>
                      <input type="text" className="form-control" id="inputPassword2" />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary mb-2">
                        Nh???n t?? v???n
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="content-featured">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="featured">
                      <div className="row">
                        <div className="col-12">
                          <h2>??i???m ?????c s???c</h2>
                          <hr />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="slick">
                            <div className="featured-image">
                              <div className="inside-image">
                                <div className="imag">
                                  <img src="./image/5fff15448a0661610552644.jpg" alt="" />
                                </div>
                                <div className="contentimage">
                                  <p>Cung ???????ng trekking ??a d???ng ?????a h??nh</p>
                                </div>
                              </div>
                            </div>
                            <div className="featured-image">
                              <div className="inside-image">
                                <div className="imag">
                                  <img src="./image/5fff1c14b500e1610554388.png" alt="" />
                                </div>
                                <div className="contentimage">
                                  <p>
                                    Chinh ph???c K??? Quan San - Top 4 n??i cao nh???t Vi???t Nam
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="featured-image">
                              <div className="inside-image">
                                <div className="imag">
                                  <img src="./image/5fff1566dc4371610552678.png" alt="" />
                                </div>
                                <div className="contentimage">
                                  <p>????n b??nh minh tr??n bi???n m??y ??? n??i Mu???i</p>
                                </div>
                              </div>
                            </div>
                            <div className="featured-image">
                              <div className="inside-image">
                                <div className="imag">
                                  <img src="./image/5fff1c14b500e1610554388.png" alt="" />
                                </div>
                                <div className="contentimage">
                                  <p>Co Com 4</p>
                                </div>
                              </div>
                            </div>
                            <div className="featured-image">
                              <div className="inside-image">
                                <div className="imag">
                                  <img src="./image/5fff1566dc4371610552678.png" alt="" />
                                </div>
                                <div className="contentimage">
                                  <p>S??n d???i ng??n h?? tr??n bi???n m??y</p>
                                </div>
                              </div>
                            </div>
                            <div className="featured-image">
                              <div className="inside-image">
                                <div className="imag">
                                  <img src="./image/5fff1566dc4371610552678.png" alt="" />
                                </div>
                                <div className="contentimage">
                                  <p>
                                    Xe cabin di chuy???n kh??? h???i H?? N???i ??? Sapa si??u tho???i
                                    m??i
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 contents">
                          <p>
                            B???ch M???c L????ng T???, hay c??n g???i l?? K??? Quan San, n???m trong Top
                            4 ng???n n??i cao nh???t Vi???t Nam. Cung ???????ng trek ??a d???ng ?????a
                            h??nh, h???p h???n gi???i tr???, t??? ru???ng b???c thang v??ng T??y B???c,
                            r???ng tr??c nguy??n sinh, ?????n c???nh t?????ng b??nh minh tr??n bi???n
                            m??y b???ng b???nh v?? m??n ????m lung linh v???i d???i Ng??n H?? r???c r???.
                            H??nh tr??nh chinh ph???c thi??n nhi??n Vi???t Nam c???a b???n s??? kh??ng
                            th??? thi???u h??nh tr??nh Chinh ph???c B???ch M???c L????ng T???.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-icon">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-xm-12 col-md-12">
                    <div className="container">
                      <div className="content-icon-item">
                        <div className="content-icon-itemInner">
                          <div className="contentInner">
                            <div className="item">
                              <div className="itemInner">
                                <p className="icon">
                                  <span className="spanicon">
                                    <i className="fa fa-home" aria-hidden="true" />
                                  </span>
                                </p>
                                <p className="text"><span>????? Cao:</span> <br />3.046m</p>
                              </div>
                            </div>
                            <div className="item">
                              <div className="itemInner">
                                <p className="icon">
                                  <span className="spanicon">
                                    <i className="fa fa-calendar" aria-hidden="true" />
                                  </span>
                                </p>
                                <p className="text"><span>????? kh??:</span><br />Trung B??nh</p>
                              </div>
                            </div>
                            <div className="item">
                              <div className="itemInner">
                                <p className="icon">
                                  <span className="spanicon">
                                    <i className="fa fa-hospital-o" aria-hidden="true" />
                                  </span>
                                </p>
                                <p className="text">
                                  <span>?????a h??nh:</span><br />R???t ??a d???ng
                                </p>
                              </div>
                            </div>
                            <div className="item">
                              <div className="itemInner">
                                <p className="icon">
                                  <span className="spanicon">
                                    <i className="fa fa-hospital-o" aria-hidden="true" />
                                  </span>
                                </p>
                                <p className="text">
                                  <span>Khu v???c:</span><br />S??ng Ma S??o, L??o Cai, Vi???t
                                  Nam
                                </p>
                              </div>
                            </div>
                            <div className="item">
                              <div className="itemInner">
                                <p className="icon">
                                  <span className="spanicon">
                                    <i className="fa fa-clock-o" aria-hidden="true" />
                                  </span>
                                </p>
                                <p className="text">
                                  <span>L???ch tr??nh:</span><br />4 ng??y 4 ????m
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="featured">
                      <div className="row">
                        <div className="col-12">
                          <h2>L???ch tr??nh</h2>
                          <hr />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="slick">
                            <div className="featured-image">
                              <div className="inside-image">
                                <div className="imag">
                                  <img src="./image/5fff1bf6a47171610554358.jpg" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="featured-image">
                              <div className="inside-image">
                                <div className="imag">
                                  <img src="./image/5fff1d10b15b91610554640.jpg" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="featured-image">
                              <div className="inside-image">
                                <div className="imag">
                                  <img src="./image/5fff1bf6a47171610554358.jpg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="schedule-wrapper">
                          <div className="row">
                            <div className="col-12 col-md-12 col-xm-12 col-lg-12">
                              <div className="schedule-contents">
                                <div className="d-flex justify-content-between schedule-location">
                                  <div className="location">
                                    <p>H?? N???i</p>
                                  </div>
                                  <div className="location">
                                    <p>S??ng Mao S??o Sapa</p>
                                  </div>
                                  <div className="location">
                                    <p>L??n ngh??? n??i Mu???i</p>
                                  </div>
                                  <div className="location">
                                    <p>Ban Chim 2</p>
                                  </div>
                                  <div className="location">
                                    <p>?????nh B???ch M???c L????ng T???</p>
                                  </div>
                                  <div className="location">
                                    <p>L??n ngh??? n??i Mu???i</p>
                                  </div>
                                  <div className="location">
                                    <p>Sapa</p>
                                  </div>
                                </div>
                                <hr />
                                <div className="schedule-date">
                                  <div className="day">
                                    <p data-toggle="tooltip" data-placement="top" title="Tr??? v??? Sapa, tr???i nghi???m t???m l?? dao, th?????ng th???c ???m th???c ?????c s???c v??ng T??y B???c v?? kh???i h??nh v??? l???i s??n bay H?? N???i">
                                      Ng??y 1
                                    </p>
                                  </div>
                                  <div className="day space">
                                    <p data-toggle="tooltip" data-placement="top" title="Tr??? v??? Sapa, tr???i nghi???m t???m l?? dao, th?????ng th???c ???m th???c ?????c s???c v??ng T??y B???c v?? kh???i h??nh v??? l???i s??n bay H?? N???i">
                                      Ng??y 2
                                    </p>
                                  </div>
                                  <div className="day space">
                                    <p data-toggle="tooltip" data-placement="top" title="Tr??? v??? Sapa, tr???i nghi???m t???m l?? dao, th?????ng th???c ???m th???c ?????c s???c v??ng T??y B???c v?? kh???i h??nh v??? l???i s??n bay H?? N???i">
                                      Ng??y 3
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="schedule-map">
                          <div className="row">
                            <div className="col-12 col-md-12 col-xm-12">
                              <div className="schedule-img">
                                <img src="./image/5fff1d10b9e771610554640.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="service-header">
                      <div className="row">
                        <div className="col-12">
                          <h2>D???ch v???</h2>
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className="service-list">
                      <div className="row">
                        <div className="col-12">
                          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item">
                              <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-general" role="tab" aria-controls="pills-home" aria-selected="true">T???ng quan</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="pills-level-tab" data-toggle="pill" href="#pills-level" role="tab" aria-controls="pills-level" aria-selected="false">????? kh??</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="pills-schedule-tab" data-toggle="pill" href="#pills-schedule" role="tab" aria-controls="pills-schedule" aria-selected="false">L???ch tr??nh</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="pills-service-tab" data-toggle="pill" href="#pills-service" role="tab" aria-controls="pills-service" aria-selected="false">D???ch v???</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="pills-scheduleandprice-tab" data-toggle="pill" href="#pills-scheduleandprice" role="tab" aria-controls="pills-scheduleandprice" aria-selected="false">L???ch kh???i h??nh v?? gi?? b??n</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="pills-sustainableTourism-tab" data-toggle="pill" href="#pills-sustainableTourism" role="tab" aria-controls="pills-sustainableTourism" aria-selected="false">Du l???ch b???n v???ng</a>
                            </li>
                          </ul>
                          <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general">
                              <div className="tabcontent">
                                <p>
                                  Chuy???n h??nh tr??nh s??? mang b???n ?????n v??ng n??i T??y B???c, c???
                                  th??? l?? n??i B???ch M???c L????ng T???, hay c??n g???i l?? K??? Quan
                                  San.
                                </p>
                                <p>
                                  Ch??? y???u b???n s??? ph???i ??i b??? tr??n nh???ng cung ???????ng d???c ?????
                                  l??n ?????nh n??i. Trong qu?? tr??nh di chuy???n, b???n s??? ???????c
                                  h??? tr??? c??c c??ng c??? chuy??n d???ng ????? ph???c v??? cho vi???c leo
                                  n??i t??? TripU. Ngo??i ra, b???n c??ng s??? ???????c h??? tr??? b???i
                                  ban h???u c???n v??ng b???n ?????a (porter), h??? s??? gi??p b???n v???n
                                  chuy???n h??nh l?? m?? b???n s??? kh??ng th?????ng xuy??n d??ng ?????n
                                  trong khi di chuy???n, h??? tr??? v?? c??ng b???n v?????t qua nh???ng
                                  ??o???n ???????ng kh?? ??i, v?? c??ng s??? l?? ng?????i ?????ng h??nh tr??
                                  chuy???n c??ng b???n trong chuy???n ??i. B???n ch??? c???n mang theo
                                  m???t bal?? nh??? cho c??c v???t d???ng c?? nh??n n???u b???n c???n s???
                                  d???ng th?????ng xuy??n.
                                </p>
                                <p><b>B???n kh??ng th??? b??? qua:</b></p>
                                <ul>
                                  <li>
                                    Cung ???????ng ?????p su???t h??nh tr??nh: ru???ng b???c thang,
                                    r???ng tr??c, r???ng nguy??n sinh, r???ng hoa ????? quy??n,
                                    phong c???nh n??i non h??ng v??.
                                  </li>
                                  <li>
                                    Chinh ph???c B???ch M???c L????ng T??? - Top 4 n??i cao nh???t
                                    Vi???t Nam
                                  </li>
                                  <li>
                                    ??i???m check-in kh??ng th??? b??? qua: ch???p h??nh c??ng b??nh
                                    minh tr??n bi???n m??y t???i N??i Mu???i, ????m r???c s??ng c??ng
                                    d??y Ng??n H??
                                  </li>
                                  <li>
                                    Tr???i nghi???m cu???c s???ng nh?? m???t ng?????i d??n b???n x???: ??i
                                    b??? qua nh???ng c??nh r???ng, ngh??? ng??i sinh ho???t t???i L??n.
                                  </li>
                                  <li>
                                    Di chuy???n b???ng xe bu???ng n???m (cabin), th?? gi??n v???i
                                    ho???t ?????ng t???m l?? dao ?????c bi???t, h??t th??? kh??ng kh??
                                    trong l??nh ????? n???p l???i n??ng l?????ng cho b???n th??n
                                  </li>
                                </ul>
                                <p>
                                  <b>V??? khu v???c n??i B???ch M???c L????ng T???: </b>B???ch M???c
                                  L????ng T??? l?? t??n ???????c kh??ch du l???ch ?????t cho ?????nh n??i
                                  cao nh???t trong d??y n??i K??? Quan San ??? ranh gi???i gi???a
                                  hai huy???n B??t X??t t???nh L??o Cai v?? huy???n Phong Th??? t???nh
                                  Lai Ch??u, Vi???t Nam. K??? Quan San c??ng l?? t??n b???n ??? ch??n
                                  n??i c???a x?? S??ng Ma S??o, huy???n B??t X??t, L??o Cai. ?????nh
                                  ch??p K??? Quan San ???????c ghi nh???n cao th??? 4 trong top
                                  nh???ng ng???n n??i cao nh???t Vi???t Nam, ?????t ????? cao 3,046m.
                                </p>
                                <p><b>Th??ng tin c???n bi???t:</b></p>
                                <ul>
                                  <li>
                                    M???t nh??m s??? ch??? gi???i h???n v???i m???c th??nh vi??n t???i ??a
                                    l?? 12 ng?????i
                                  </li>
                                  <li>
                                    H??nh tr??nh s??? ph?? h???p v???i ng?????i l???n ????? tu???i t??? 18
                                    tu???i tr??? l??n, b???n c???n x??c nh???n c??c cam k???t khi ?????t
                                    d???ch v???
                                  </li>
                                  <li>
                                    H??nh tr??nh n??y ph?? h???p v???i kh??ch h??ng t???: 12 ??? 45
                                    tu???i( b???n s??? c???n x??c nh???n nh???ng cam k???t v??? s???c kho???
                                    khi ?????t d???ch v???).
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="pills-level" role="tabpanel" aria-labelledby="pills-level">
                              <div className="tabcontent">
                                <p>
                                  V???i nh???ng chuy???n ??i c??ng TripU Xplore, b???n c???n tham
                                  kh???o ????? kh?? ????? x??c ?????nh ???????c s??? ph?? h???p v??? s???c kho??? v??
                                  s??? th??ch v???i c??c cung ???????ng.
                                </p>
                                <p>
                                  ????nh gi?? c???a ch??ng t??i cho h??nh tr??nh Chinh ph???c B???ch
                                  M???c L????ng T???: <b>Level 3</b>
                                </p>
                                <p>Gi???i m?? ????? kh??:</p>
                                <ul>
                                  <li>
                                    Th???i gian di chuy???n: trung b??nh 7-8 ti???ng / ng??y( ????
                                    bao g???m th???i gian ??n tr??a v?? ngh??? ng??i tr??n ???????ng
                                    ??i)
                                  </li>
                                  <li>Qu??ng ???????ng d??i: 30km</li>
                                  <li>
                                    Ch??nh l???ch ????? cao t??? ??i???m xu???t ph??t ?????n ????ch: 835 ???
                                    3046m,
                                  </li>
                                  <li>
                                    C??c cung ???????ng g???m: ???????ng xuy??n r???ng, ???????ng d???c,
                                    ???????ng c?? v??ch ????
                                  </li>
                                  <li>
                                    ?????a h??nh: ???????ng d???c, ???????ng m??n xuy??n r???ng, v??ch ????
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="pills-schedule" role="tabpanel" aria-labelledby="pills-schedule">
                              <div className="tabcontent">
                                <p>
                                  B???n c?? th??? ch???n ??i???m xu???t ph??t kh??c nhau t??? TPHCM, Nha
                                  Trang, ???? L???t, ???? N???ng,??? ?????n H?? N???
                                </p>
                                <p>
                                  Ch??ng t??i s??? ????n b???n t???i H?? N???i t???i 2 ?????a ??i???m: S??n
                                  Bay N???i B??i ??? H?? N???i v?? [xxxxx]
                                </p>
                                <ul>
                                  <li>
                                    Ng??y 0: T???p trung t??? H?? N???i, ??o??n s??? di chuy???n c??ng
                                    nhau ?????n S??ng Ma S??o, Sapa ??? ng??? ????m tr??n xe gi?????ng
                                    n???m cabin ch???t l?????ng cao (ch??? 20 ch???/ chi???c).
                                  </li>
                                  <li>
                                    Ng??y 1: Chinh ph???c cung ???????ng trekking ????? ?????n n??i
                                    Mu???i, ng???m nh??n thi??n nhi??n T??y B???c ?????p tuy???t v???i
                                    qua nhi???u ?????a h??nh ??? ng??? ????m t???i L??n ngh???, ?????m ch??m
                                    trong d??y Ng??n H?? lung linh.
                                  </li>
                                  <li>
                                    Ng??y 2: Th?????ng th???c b??nh minh tr??n bi???n m??y si??u
                                    th???c, ch???m ?????nh K??? Quan San t???i ????? cao 3.046m. Xin
                                    ch??c m???ng b???n ???? ch???m ?????n m???t trong Top 4 ?????nh n??i
                                    cao nh???t Vi???t Nam. Ngh??? ng??i t???i L??n c??ng bu???i ti???c
                                    m???ng ???m ??p b??n khung c???nh ho??ng h??n kh?? qu??n.
                                  </li>
                                  <li>
                                    Ng??y 3: Tr??? v??? Sapa, tr???i nghi???m t???m l?? dao, th?????ng
                                    th???c ???m th???c ?????c s???c v??ng T??y B???c v?? kh???i h??nh v???
                                    l???i s??n bay H?? N???i
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="pills-service" role="tabpanel" aria-labelledby="pills-service">
                              <div className="tabcontent">
                                <p>D???ch v???:</p>
                                <p>Bao g???m</p>
                                <ul>
                                  <li>N??i ngh??? ch??n:</li>
                                  <li>??n u???ng</li>
                                  <li>Di chuy???n:</li>
                                </ul>
                                <p>Kh??ng bao g???m</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="pills-scheduleandprice" role="tabpanel" aria-labelledby="pills-scheduleandprice">
                              <div className="tabcontent">
                                <p>
                                  L???ch kh???i h??nh: kh???i h??nh th??? 4 h???ng tu???n Gi?? b??n:
                                  xxxxx Khuy???n m??i: Khuy???n m??i l??n ?????n XXX ?????ng khi
                                  thanh to??n b???ng v?? VNPAY QR Promotion theo nh??m t??? 3
                                  ng?????i tr??? l??n: gi???m ngay 50,000VND cho m???i kh??ch
                                </p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="pills-sustainableTourism" role="tabpanel" aria-labelledby="pills-sustainableTourism">
                              <div className="tabcontent">
                                <p>
                                  Du li??ch b????n v????ng la?? du li??ch gia??m thi????u ca??c chi phi?? va??
                                  na??ng cao t????i ??a ca??c l????i i??ch cu??a du li??ch cho mo??i tru??????ng
                                  t???? nhie??n va?? c?????ng ??????ng ??i??a phu??o??ng va?? co?? th???? ??u??????c th????c
                                  hi?????n la??u da??i nhu??ng kho??ng a??nh hu??????ng x????u ??????n ngu????n l????i
                                  ma?? no?? phu?? thu?????c va??o.
                                </p>
                                <p><b>Ba cha??n cu??a du li??ch b????n v????ng</b></p>
                                <p>
                                  Du li??ch b????n v????ng co?? ba h????p ph????n chi??nh, ??o??i khi ??u??????c vi??
                                  nhu?? "ba cha??n": &gt;
                                </p>
                                <ul className="sustainableTourism-ul">
                                  <li>
                                    Tha??n thi?????n v????i mo??i tru??????ng: Du li??ch b????n v????ng co?? ta??c
                                    ???????ng th????p ??????n mo??i tru??????ng t???? nhie??n va?? khu ba??o t????n
                                    bi????n. No?? gia??m thi????u ca??c ta??c ???????ng ??????n mo??i tru??????ng
                                    (???????ng v?????t, ca??c sinh ca??nh s????ng, ngu????n l????i s????ng, s????
                                    du??ng na??ng lu??????ng va?? o?? nhi????m...) va?? c???? g????ng co?? l????i cho
                                    mo??i tru??????ng.
                                  </li>
                                  <li>
                                    G????n gu??i v???? xa?? h?????i va?? va??n ho??a: Du li??ch b????n v????ng kho??ng
                                    ga??y ha??i ??????n ca??c c????u tru??c xa?? h?????i va?? va??n ho??a cu??a c?????ng
                                    ??????ng no??i ma?? chu??ng ??u??????c th????c hi?????n. Thay va??o ??o?? thi?? no??
                                    la??i to??n tro??ng va??n ho??a va?? truy????n th????ng ??i??a phu??o??ng.
                                    Khuy????n khi??ch ca??c be??n lie??n quan (ca??c ca?? nha??n, c?????ng
                                    ??????ng, nha?? ??i????u ha??nh chu??o??ng tri??nh du li??ch va?? qua??n l??
                                    chi??nh quy????n) trong t????t ca?? ca??c giai ??oa??n cu??a vi?????c l?????p
                                    k???? hoa??ch, pha??t tri????n va?? gia??m sa??t, gia??o du??c ca??c be??n
                                    lie??n quan v???? vai tro?? cu??a ho??.
                                  </li>
                                  <li>
                                    Co?? kinh t????: Du li??ch b????n v????ng ??o??ng go??p v???? m?????t kinh t????
                                    cho c?????ng ??????ng va?? ta??o ra nh????ng thu nh?????p co??ng b????ng va??
                                    ????n ??i??nh cho c?????ng ??????ng ??i??a phu??o??ng cu??ng nhu?? ca??ng nhi????u
                                    be??n lie??n quan kha??c ca??ng t????t. No?? mang l????i i??ch cho
                                    ngu??????i chu??, cho nha??n vie??n va?? ca?? ngu??????i xung quanh. No??
                                    kho??ng b????t ??????u m?????t ca??ch ??o??n gia??n ?????? sau ??o?? su??p ??????
                                    nhanh do ca??c hoa??t ???????ng kinh doanh nghe??o na??n. M?????t ??o??n
                                    vi?? kinh doanh du li??ch ma?? h?????i ??u?? ba tie??u chi?? tre??n thi??
                                    "se?? kinh doanh t????t nh???? la??m t????t". ??i????u na??y co?? nghi??a
                                    la?? kinh doanh du li??ch co?? th???? ta??ng cu??????ng vi?????c ba??o t????n
                                    ngu????n l????i t???? nhie??n, ??a??nh gia?? cao gia?? tri?? va??n ho??a,
                                    mang l????i t????c ??????n cho c?????ng ??????ng va?? cu??ng co?? th???? se?? thu
                                    l????i t????c.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="about-title">
                      <div className="row">
                        <div className="col-12">
                          <h2>V??? TripU</h2>
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className="about-information">
                      <div className="row">
                        <div className="col-12">
                          <div className="about-upon">
                            <div className="about-upon-image abouthidden">
                              <img src="./image/5fff1db826e8c1610554808.png" alt="" />
                            </div>
                            <div className="about-upon-info">
                              <p>
                                TripU l?? c??ng ty du l???ch tr???c tuy???n tr???c thu???c Vietravel
                                Group. N???n t???ng ????p ???ng ??a d???ng c??c nhu c???u v??? ?????t ph??ng
                                kh??ch s???n, d???ch v??? visa cho du l???ch t??? t??c v?? c??c tour
                                du l???ch kh??m ph?? d??nh cho gi???i tr???. H??nh tr??nh c???a b???n
                                lu??n ???????c cam k???t:
                              </p>
                            </div>
                          </div>
                          <div className="about-below">
                            <div className="about-below-all">
                              <div className="about-below-icon">
                                <img src="./image/5fff251adc8fb1610556698.png" alt="" />
                              </div>
                              <div className="about-below-info">
                                <p>
                                  Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s
                                </p>
                              </div>
                            </div>
                            <div className="about-below-all">
                              <div className="about-below-icon">
                                <img src="./image/5fff251adc9f91610556698.png" alt="" />
                              </div>
                              <div className="about-below-info">
                                <p>
                                  Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s
                                </p>
                              </div>
                            </div>
                            <div className="about-below-all">
                              <div className="about-below-icon">
                                <img src="./image/5fff251adc9f91610556698.png" alt="" />
                              </div>
                              <div className="about-below-info">
                                <p>
                                  Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s
                                </p>
                              </div>
                            </div>
                            <div className="about-below-all">
                              <div className="about-below-icon">
                                <img src="./image/5fff252d55bed1610556717.png" alt="" />
                              </div>
                              <div className="about-below-info">
                                <p>
                                  Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s
                                </p>
                              </div>
                            </div>
                            <div className="about-below-all">
                              <div className="about-below-icon">
                                <img src="./image/5fff252d55bed1610556717.png" alt="" />
                              </div>
                              <div className="about-below-info">
                                <p>
                                  Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s
                                </p>
                              </div>
                            </div>
                            <div className="about-below-all">
                              <div className="about-below-icon">
                                <img src="./image/5fff251adcb3f1610556698.png" alt="" />
                              </div>
                              <div className="about-below-info">
                                <p>
                                  Lorem Ipsum is simply dummy text of the printing and
                                  typesetting industry. Lorem Ipsum has been the
                                  industry's standard dummy text ever since the 1500s
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experencescustomer">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="experencescustomer-header">
                      <div className="row">
                        <div className="col-12">
                          <h2>C???m nh???n kh??ch h??ng</h2>
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className="experencescustomer-content">
                      <div className="row">
                        <div className="col-12">
                          <div className="contents">
                            <div className="row">
                              <div className="col-2 hidden">
                                <div className="img">
                                  <img src="./image/6013cdc34690e1611910595.png" alt="" width="136px" height="136px" />
                                </div>
                              </div>
                              <div className="col-md-8 col-lg-8 col-xm-12">
                                <div className="contents-imgandtitle">
                                  <div className="contents-img">
                                    <img src="./image/6013cdc34690e1611910595.png" alt="" width="160px" height="160px" />
                                  </div>
                                  <div className="contents-title">
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetuer
                                      adipiscing elit. Aenean commodo ligula eget dolor.
                                      Aenean massa. Cum sociis natoque penatibus et
                                      magnis dis parturient montes, nascetur ridiculus
                                      mus. Donec quam felis, ultricies nec, pellentesque
                                      eu, pretium quis, sem. Nulla consequat massa quis
                                      enim. Donec pede justo, fringilla vel, aliquet
                                      nec, vulputate eget, arcu. In enim justo, rhoncus
                                      ut, imperdiet a, venenatis vitae, justo. Nullam
                                      dictum felis eu pede mollis pretium. Integer
                                      tincidunt. Cras dapibus. Vivamus elementum semper
                                      nisi. Aenean vulputate eleifend tellus. Aenean leo
                                      ligula, porttitor eu, consequat vitae, eleifend
                                      ac, enim. Aliquam lorem ante, dapibus in, viverra
                                      quis, feugiat a, tellus. Phasellus viverra nulla
                                      ut metus varius laoreet. Quisque rutrum. Aenean
                                      imperdiet. Etiam ultricies nisi vel augue.
                                      Curabitur ullamcorper ultricies nisi. Nam eget
                                      dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                      condimentum rhoncus, sem quam semper libero, sit
                                      amet adipiscing sem neque sed ipsum. Nam quam
                                      nunc, blandit vel, luctus pulvinar, hendrerit id,
                                      lorem. Maecenas nec odio et ante tincidunt tempus.
                                      Donec vitae sapien ut libero venenatis faucibus.
                                      Nullam quis ante. Etiam sit amet orci eget eros
                                      faucibus tincidunt. Duis leo. Sed fringilla mauris
                                      sit amet nibh. Donec sodales sagittis magna. Sed
                                      consequat, leo eget bibendum sodales, augue velit
                                      cursus nunc,
                                    </p>
                                    <h4>Kh??ch h??ng 1<span>Product Manager</span></h4>
                                    <img src="./image/quote.png" alt="" className="quocte" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-2 hidden">
                                <div className="img">
                                  <img src="./image/6013cdc34690e1611910595.png" alt="" width="136px" height="136px" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="RecommendedItinerary">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="RecommendedItinerary-header">
                      <div className="row">
                        <div className="col-12">
                          <h2>H??nh tr??nh g???i ??</h2>
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className="RecommendedItinerary-content">
                      <div className="row">
                        <div className="col-md-4 col-lg-4 col-xm-12">
                          <div className="RecommendedItinerary-slick">
                            <div className="RecommendedItinerary-slide">
                              <div className="RecommendedItinerary-img">
                                <img src="./image/5fff1ea1af6851610555041.png" alt="" />
                              </div>
                              <div className="RecommendedItinerary-title">
                                <p>Tour Ta Xua - Comming soon</p>
                              </div>
                            </div>
                            <div className="RecommendedItinerary-slide">
                              <div className="RecommendedItinerary-img">
                                <img src="./image/5fff1e6a2c0ad1610554986.png" alt="" />
                              </div>
                              <div className="RecommendedItinerary-title">
                                <p>Tour Ta Xua - Comming soon</p>
                              </div>
                            </div>
                            <div className="RecommendedItinerary-slide">
                              <div className="RecommendedItinerary-img">
                                <img src="./image/6002b763330d01610790755.png" alt="" />
                              </div>
                              <div className="RecommendedItinerary-title">
                                <p>Tour Ta Xua - Comming soon</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xm-12">
                          <div className="RecommendedItinerary-slick">
                            <div className="RecommendedItinerary-slide">
                              <div className="RecommendedItinerary-img">
                                <img src="./image/5fff1e6a2c0ad1610554986.png" alt="" />
                              </div>
                              <div className="RecommendedItinerary-title">
                                <p>Tour Ta Xua - Comming soon</p>
                              </div>
                            </div>
                            <div className="RecommendedItinerary-slide">
                              <div className="RecommendedItinerary-img">
                                <img src="./image/6002b763330d01610790755.png" alt="" />
                              </div>
                              <div className="RecommendedItinerary-title">
                                <p>Tour Ta Xua - Comming soon</p>
                              </div>
                            </div>
                            <div className="RecommendedItinerary-slide">
                              <div className="RecommendedItinerary-img">
                                <img src="./image/5fff1ea1af6851610555041.png" alt="" />
                              </div>
                              <div className="RecommendedItinerary-title">
                                <p>Tour Ta Xua - Comming soon</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xm-12">
                          <div className="RecommendedItinerary-slick">
                            <div className="RecommendedItinerary-slide">
                              <div className="RecommendedItinerary-img">
                                <img src="./image/5fff1ea1af6851610555041.png" alt="" />
                              </div>
                              <div className="RecommendedItinerary-title">
                                <p>Tour Ta Xua - Comming soon</p>
                              </div>
                            </div>
                            <div className="RecommendedItinerary-slide">
                              <div className="RecommendedItinerary-img">
                                <img src="./image/6002b763330d01610790755.png" alt="" />
                              </div>
                              <div className="RecommendedItinerary-title">
                                <p>Tour Ta Xua - Comming soon</p>
                              </div>
                            </div>
                            <div className="RecommendedItinerary-slide">
                              <div className="RecommendedItinerary-img">
                                <img src="./image/6002b763330d01610790755.png" alt="" />
                              </div>
                              <div className="RecommendedItinerary-title">
                                <p>Tour Ta Xua - Comming soon</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="inner">
                      <div className="row">
                        <div className="col-12 col-md-3 col-lg-3">
                          <div className="footer-image">
                            <img src="./image/footer-logo.png" alt="" />
                          </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-7">
                          <div className="footer-content">
                            <h4>Li??n h???</h4>
                            <div className="inner-footer-content">
                              <p><span>Website:</span>abcxyz.com</p>
                              <p><span> Hotline:</span>123456789</p>
                              <p><span> V??n ph??ng: </span>t???i qu???n 9,TP.HCM</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-2 col-lg-2">
                          <div className="footer-icon">
                            <div className="inner-footer-icon">
                              <span><i className="fa fa-instagram" aria-hidden="true" /></span>
                              <span><i className="fa fa-facebook-official" aria-hidden="true" /></span>
                              <span><i className="fa fa-twitter-square" aria-hidden="true" /></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="register">
              <a href="#content-form" className="resgi">
                <img src="/image/button.png" alt="" />
              </a>
            </div>
          </div>
        );
    }
}
export default App;