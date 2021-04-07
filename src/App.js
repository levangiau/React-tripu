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
                      <span className="inner-p-span1">Tư Vấn</span>
                    </div>
                    <div className="inner-p">
                      <span className="inner-p-span2">Đặt Tour</span>
                    </div>
                  </div>
                  <div className="form-content">
                    <div className="form-group">
                      <label htmlFor="inputPassword2">Họ và tên</label>
                      <input type="text" className="form-control" id="inputPassword2" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPassword2">Số điện thoại</label>
                      <input type="text" className="form-control" id="inputPassword2" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPassword2">Email</label>
                      <input type="text" className="form-control" id="inputPassword2" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPassword2">Câu hỏi</label>
                      <input type="text" className="form-control" id="inputPassword2" />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary mb-2">
                        Nhận tư vấn
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
                          <h2>Điểm đặc sắc</h2>
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
                                  <p>Cung đường trekking đa dạng địa hình</p>
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
                                    Chinh phục Kỳ Quan San - Top 4 núi cao nhất Việt Nam
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
                                  <p>Đón bình minh trên biển mây ở núi Muối</p>
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
                                  <p>Săn dải ngân hà trên biển mây</p>
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
                                    Xe cabin di chuyển khứ hồi Hà Nội – Sapa siêu thoải
                                    mái
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
                            Bạch Mộc Lương Tử, hay còn gọi là Kỳ Quan San, nằm trong Top
                            4 ngọn núi cao nhất Việt Nam. Cung đường trek đa dạng địa
                            hình, hớp hồn giới trẻ, từ ruộng bậc thang vùng Tây Bắc,
                            rừng trúc nguyên sinh, đến cảnh tượng bình minh trên biển
                            mây bồng bềnh và màn đêm lung linh với dải Ngân Hà rực rỡ.
                            Hành trình chinh phục thiên nhiên Việt Nam của bạn sẽ không
                            thể thiếu hành trình Chinh phục Bạch Mộc Lương Tử.
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
                                <p className="text"><span>Độ Cao:</span> <br />3.046m</p>
                              </div>
                            </div>
                            <div className="item">
                              <div className="itemInner">
                                <p className="icon">
                                  <span className="spanicon">
                                    <i className="fa fa-calendar" aria-hidden="true" />
                                  </span>
                                </p>
                                <p className="text"><span>Độ khó:</span><br />Trung Bình</p>
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
                                  <span>Địa hình:</span><br />Rất đa dạng
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
                                  <span>Khu vực:</span><br />Sàng Ma Sáo, Lào Cai, Việt
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
                                  <span>Lịch trình:</span><br />4 ngày 4 đêm
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
                          <h2>Lịch trình</h2>
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
                                    <p>Hà Nội</p>
                                  </div>
                                  <div className="location">
                                    <p>Sàng Mao Sáo Sapa</p>
                                  </div>
                                  <div className="location">
                                    <p>Lán nghỉ núi Muối</p>
                                  </div>
                                  <div className="location">
                                    <p>Ban Chim 2</p>
                                  </div>
                                  <div className="location">
                                    <p>Đỉnh Bạch Mộc Lương Tử</p>
                                  </div>
                                  <div className="location">
                                    <p>Lán nghỉ núi Muối</p>
                                  </div>
                                  <div className="location">
                                    <p>Sapa</p>
                                  </div>
                                </div>
                                <hr />
                                <div className="schedule-date">
                                  <div className="day">
                                    <p data-toggle="tooltip" data-placement="top" title="Trở về Sapa, trải nghiệm tắm lá dao, thưởng thức ẩm thực đặc sắc vùng Tây Bắc và khởi hành về lại sân bay Hà Nội">
                                      Ngày 1
                                    </p>
                                  </div>
                                  <div className="day space">
                                    <p data-toggle="tooltip" data-placement="top" title="Trở về Sapa, trải nghiệm tắm lá dao, thưởng thức ẩm thực đặc sắc vùng Tây Bắc và khởi hành về lại sân bay Hà Nội">
                                      Ngày 2
                                    </p>
                                  </div>
                                  <div className="day space">
                                    <p data-toggle="tooltip" data-placement="top" title="Trở về Sapa, trải nghiệm tắm lá dao, thưởng thức ẩm thực đặc sắc vùng Tây Bắc và khởi hành về lại sân bay Hà Nội">
                                      Ngày 3
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
                          <h2>Dịch vụ</h2>
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className="service-list">
                      <div className="row">
                        <div className="col-12">
                          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item">
                              <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-general" role="tab" aria-controls="pills-home" aria-selected="true">Tổng quan</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="pills-level-tab" data-toggle="pill" href="#pills-level" role="tab" aria-controls="pills-level" aria-selected="false">Độ khó</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="pills-schedule-tab" data-toggle="pill" href="#pills-schedule" role="tab" aria-controls="pills-schedule" aria-selected="false">Lịch trình</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="pills-service-tab" data-toggle="pill" href="#pills-service" role="tab" aria-controls="pills-service" aria-selected="false">Dịch vụ</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="pills-scheduleandprice-tab" data-toggle="pill" href="#pills-scheduleandprice" role="tab" aria-controls="pills-scheduleandprice" aria-selected="false">Lịch khởi hành và giá bán</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="pills-sustainableTourism-tab" data-toggle="pill" href="#pills-sustainableTourism" role="tab" aria-controls="pills-sustainableTourism" aria-selected="false">Du lịch bền vững</a>
                            </li>
                          </ul>
                          <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general">
                              <div className="tabcontent">
                                <p>
                                  Chuyến hành trình sẽ mang bạn đến vùng núi Tây Bắc, cụ
                                  thể là núi Bạch Mộc Lương Tử, hay còn gọi là Kỳ Quan
                                  San.
                                </p>
                                <p>
                                  Chủ yếu bạn sẽ phải đi bộ trên những cung đường dốc để
                                  lên đỉnh núi. Trong quá trình di chuyển, bạn sẽ được
                                  hỗ trợ các công cụ chuyên dụng để phục vụ cho việc leo
                                  núi từ TripU. Ngoài ra, bạn cũng sẽ được hỗ trợ bởi
                                  ban hậu cần vùng bản địa (porter), họ sẽ giúp bạn vận
                                  chuyển hành lý mà bạn sẽ không thường xuyên dùng đến
                                  trong khi di chuyển, hỗ trợ và cùng bạn vượt qua những
                                  đoạn đường khó đi, và cũng sẽ là người đồng hành trò
                                  chuyện cùng bạn trong chuyến đi. Bạn chỉ cần mang theo
                                  một balô nhỏ cho các vật dụng cá nhân nếu bạn cần sử
                                  dụng thường xuyên.
                                </p>
                                <p><b>Bạn không thể bỏ qua:</b></p>
                                <ul>
                                  <li>
                                    Cung đường đẹp suốt hành trình: ruộng bậc thang,
                                    rừng trúc, rừng nguyên sinh, rừng hoa đỗ quyên,
                                    phong cảnh núi non hùng vĩ.
                                  </li>
                                  <li>
                                    Chinh phục Bạch Mộc Lương Tử - Top 4 núi cao nhất
                                    Việt Nam
                                  </li>
                                  <li>
                                    Điểm check-in không thể bỏ qua: chụp hình cùng bình
                                    minh trên biển mây tại Núi Muối, đêm rực sáng cùng
                                    dãy Ngân Hà
                                  </li>
                                  <li>
                                    Trải nghiệm cuộc sống như một người dân bản xứ: đi
                                    bộ qua những cánh rừng, nghỉ ngơi sinh hoạt tại Lán.
                                  </li>
                                  <li>
                                    Di chuyển bằng xe buồng nằm (cabin), thư giãn với
                                    hoạt động tắm lá dao đặc biệt, hít thở không khí
                                    trong lành để nạp lại năng lượng cho bản thân
                                  </li>
                                </ul>
                                <p>
                                  <b>Về khu vực núi Bạch Mộc Lương Tử: </b>Bạch Mộc
                                  Lương Tử là tên được khách du lịch đặt cho đỉnh núi
                                  cao nhất trong dãy núi Kỳ Quan San ở ranh giới giữa
                                  hai huyện Bát Xát tỉnh Lào Cai và huyện Phong Thổ tỉnh
                                  Lai Châu, Việt Nam. Kỳ Quan San cũng là tên bản ở chân
                                  núi của xã Sàng Ma Sáo, huyện Bát Xát, Lào Cai. Đỉnh
                                  chóp Kỳ Quan San được ghi nhận cao thứ 4 trong top
                                  những ngọn núi cao nhất Việt Nam, đạt độ cao 3,046m.
                                </p>
                                <p><b>Thông tin cần biết:</b></p>
                                <ul>
                                  <li>
                                    Một nhóm sẽ chỉ giới hạn với mức thành viên tối đa
                                    là 12 người
                                  </li>
                                  <li>
                                    Hành trình sẽ phù hợp với người lớn độ tuổi từ 18
                                    tuổi trở lên, bạn cần xác nhận các cam kết khi đặt
                                    dịch vụ
                                  </li>
                                  <li>
                                    Hành trình này phù hợp với khách hàng từ: 12 – 45
                                    tuổi( bạn sẽ cần xác nhận những cam kết về sức khoẻ
                                    khi đặt dịch vụ).
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="pills-level" role="tabpanel" aria-labelledby="pills-level">
                              <div className="tabcontent">
                                <p>
                                  Với những chuyến đi cùng TripU Xplore, bạn cần tham
                                  khảo độ khó để xác định được sự phù hợp về sức khoẻ và
                                  sở thích với các cung đường.
                                </p>
                                <p>
                                  Đánh giá của chúng tôi cho hành trình Chinh phục Bạch
                                  Mộc Lương Tử: <b>Level 3</b>
                                </p>
                                <p>Giải mã độ khó:</p>
                                <ul>
                                  <li>
                                    Thời gian di chuyển: trung bình 7-8 tiếng / ngày( đã
                                    bao gồm thời gian ăn trưa và nghỉ ngơi trên đường
                                    đi)
                                  </li>
                                  <li>Quãng đường dài: 30km</li>
                                  <li>
                                    Chênh lệch độ cao từ điểm xuất phát đến đích: 835 –
                                    3046m,
                                  </li>
                                  <li>
                                    Các cung đường gồm: đường xuyên rừng, đường dốc,
                                    đường có vách đá
                                  </li>
                                  <li>
                                    Địa hình: đường dốc, đường mòn xuyên rừng, vách đá
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="pills-schedule" role="tabpanel" aria-labelledby="pills-schedule">
                              <div className="tabcontent">
                                <p>
                                  Bạn có thể chọn điểm xuất phát khác nhau từ TPHCM, Nha
                                  Trang, Đà Lạt, Đà Nẵng,… đến Hà Nộ
                                </p>
                                <p>
                                  Chúng tôi sẽ đón bạn tại Hà Nội tại 2 địa điểm: Sân
                                  Bay Nội Bài – Hà Nội và [xxxxx]
                                </p>
                                <ul>
                                  <li>
                                    Ngày 0: Tập trung từ Hà Nội, đoàn sẽ di chuyển cùng
                                    nhau đến Sàng Ma Sáo, Sapa – ngủ đêm trên xe giường
                                    nằm cabin chất lượng cao (chỉ 20 chỗ/ chiếc).
                                  </li>
                                  <li>
                                    Ngày 1: Chinh phục cung đường trekking để đến núi
                                    Muối, ngắm nhìn thiên nhiên Tây Bắc đẹp tuyệt vời
                                    qua nhiều địa hình – ngủ đêm tại Lán nghỉ, đắm chìm
                                    trong dãy Ngân Hà lung linh.
                                  </li>
                                  <li>
                                    Ngày 2: Thưởng thức bình minh trên biển mây siêu
                                    thực, chạm đỉnh Kỳ Quan San tại độ cao 3.046m. Xin
                                    chúc mừng bạn đã chạm đến một trong Top 4 đỉnh núi
                                    cao nhất Việt Nam. Nghỉ ngơi tại Lán cùng buổi tiệc
                                    mừng ấm áp bên khung cảnh hoàng hôn khó quên.
                                  </li>
                                  <li>
                                    Ngày 3: Trở về Sapa, trải nghiệm tắm lá dao, thưởng
                                    thức ẩm thực đặc sắc vùng Tây Bắc và khởi hành về
                                    lại sân bay Hà Nội
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="pills-service" role="tabpanel" aria-labelledby="pills-service">
                              <div className="tabcontent">
                                <p>Dịch vụ:</p>
                                <p>Bao gồm</p>
                                <ul>
                                  <li>Nơi nghỉ chân:</li>
                                  <li>Ăn uống</li>
                                  <li>Di chuyển:</li>
                                </ul>
                                <p>Không bao gồm</p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="pills-scheduleandprice" role="tabpanel" aria-labelledby="pills-scheduleandprice">
                              <div className="tabcontent">
                                <p>
                                  Lịch khởi hành: khởi hành thứ 4 hằng tuần Giá bán:
                                  xxxxx Khuyến mãi: Khuyến mãi lên đến XXX đồng khi
                                  thanh toán bằng ví VNPAY QR Promotion theo nhóm từ 3
                                  người trở lên: giảm ngay 50,000VND cho mỗi khách
                                </p>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="pills-sustainableTourism" role="tabpanel" aria-labelledby="pills-sustainableTourism">
                              <div className="tabcontent">
                                <p>
                                  Du lịch bền vững là du lịch giảm thiểu các chi phí và
                                  nâng cao tối đa các lợi ích của du lịch cho môi trường
                                  tự nhiên và cộng đồng địa phương và có thể được thực
                                  hiện lâu dài nhưng không ảnh hưởng xấu đến nguồn lợi
                                  mà nó phụ thuộc vào.
                                </p>
                                <p><b>Ba chân của du lịch bền vững</b></p>
                                <p>
                                  Du lịch bền vững có ba hợp phần chính, đôi khi được ví
                                  như "ba chân": &gt;
                                </p>
                                <ul className="sustainableTourism-ul">
                                  <li>
                                    Thân thiện với môi trường: Du lịch bền vững có tác
                                    động thấp đến môi trường tự nhiên và khu bảo tồn
                                    biển. Nó giảm thiểu các tác động đến môi trường
                                    (động vật, các sinh cảnh sống, nguồn lợi sống, sử
                                    dụng năng lượng và ô nhiễm...) và cố gắng có lợi cho
                                    môi trường.
                                  </li>
                                  <li>
                                    Gần gũi về xã hội và văn hóa: Du lịch bền vững không
                                    gây hại đến các cấu trúc xã hội và văn hóa của cộng
                                    đồng nơi mà chúng được thực hiện. Thay vào đó thì nó
                                    lại tôn trọng văn hóa và truyền thống địa phương.
                                    Khuyến khích các bên liên quan (các cá nhân, cộng
                                    đồng, nhà điều hành chương trình du lịch và quản lí
                                    chính quyền) trong tất cả các giai đoạn của việc lập
                                    kế hoạch, phát triển và giám sát, giáo dục các bên
                                    liên quan về vai trò của họ.
                                  </li>
                                  <li>
                                    Có kinh tế: Du lịch bền vững đóng góp về mặt kinh tế
                                    cho cộng đồng và tạo ra những thu nhập công bằng và
                                    ổn định cho cộng đồng địa phương cũng như càng nhiều
                                    bên liên quan khác càng tốt. Nó mang lợi ích cho
                                    người chủ, cho nhân viên và cả người xung quanh. Nó
                                    không bắt đầu một cách đơn giản để sau đó sụp đổ
                                    nhanh do các hoạt động kinh doanh nghèo nàn. Một đơn
                                    vị kinh doanh du lịch mà hội đủ ba tiêu chí trên thì
                                    "sẽ kinh doanh tốt nhờ làm tốt". Điều này có nghĩa
                                    là kinh doanh du lịch có thể tăng cường việc bảo tồn
                                    nguồn lợi tự nhiên, đánh giá cao giá trị văn hóa,
                                    mang lợi tức đến cho cộng đồng và cũng có thể sẽ thu
                                    lợi tức.
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
                          <h2>Về TripU</h2>
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
                                TripU là công ty du lịch trực tuyến trực thuộc Vietravel
                                Group. Nền tảng đáp ứng đa dạng các nhu cầu về đặt phòng
                                khách sạn, dịch vụ visa cho du lịch tự túc và các tour
                                du lịch khám phá dành cho giới trẻ. Hành trình của bạn
                                luôn được cam kết:
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
                          <h2>Cảm nhận khách hàng</h2>
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
                                    <h4>Khách hàng 1<span>Product Manager</span></h4>
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
                          <h2>Hành trình gợi ý</h2>
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
                            <h4>Liên hệ</h4>
                            <div className="inner-footer-content">
                              <p><span>Website:</span>abcxyz.com</p>
                              <p><span> Hotline:</span>123456789</p>
                              <p><span> Văn phòng: </span>tại quận 9,TP.HCM</p>
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