const Profile = ()=>{
    return (
        <div className="main-content">
        <!-- Header -->
        <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style="min-height: 600px; background-image: url(@Url.Content("~/image/banner_bg.jpg")); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span className="mask bg-gradient-default opacity-8"></span>
            <!-- Header container -->
            <div className="container-fluid d-flex align-items-center">
                <div className="row">
                    <div className="col-lg-7 col-md-10">
                        @if (ViewBag.Role != null)
                        {
                            <h1 className="display-2 text-white">Xin chào @item.FullName</h1>
                            <p className="text-white mt-0 mb-5">
                                Đây là trang hồ sơ của bạn. Bạn có thể thấy tiến độ bạn đã đạt được trong công việc và quản lý các dự án hoặc nhiệm vụ được giao
                            </p>
                        }
                        else
                        {
                            <h1 className="display-2 text-white">Tài khoản @item.FullName</h1>
                        }
                        @if (ViewBag.Role != null)
                        {
                            <a href="@Url.Action("Edit","Profile",new{id=item.AccountId})" className="btn btn-info">Chỉnh sửa hồ sơ</a>
                        }
                        @if (TempData.Peek("message") != null)
                        {
                            <h4 id="message" style="background-color:@TempData["bgcolor"];color:@TempData["color"];padding:10px;border-radius:10px;margin-top:2%">@TempData["message"]</h4>
                        }
                        @Html.ValidationSummary(true, "", new { @class = "text-danger" })
                    </div>
                </div>
            </div>
        </div>
        @if (ViewBag.Role != null)
        {
            <!-- Page content -->
            <div className="container-fluid mt--7">
                <div className="row">
                    <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                        <div className="card card-profile shadow">
                            <div className="row justify-content-center">
                                <div className="col-lg-3 order-lg-2">
                                    <div className="card-profile-image">
                                        <a href="#">
                                            @if (item.Picture != null)
                                            {
                                                <img src="~/upload/images/@item.Picture" className="rounded-circle" alt="avatar" width="180" height="180" style="object-fit:cover">
                                            }
                                            else
                                            {
                                                <img src="~/upload/images/icon_user.png" className="rounded-circle" alt="avatar" width="180" height="180" style="object-fit:cover">
                                            }
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4" style="background: transparent">
                            </div>
                            <div className="card-body pt-0 pt-md-4">
                                <div className="row">
                                    <div className="col">
                                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                                            <div>
                                                <span className="heading">@item.Point</span>
                                                <span className="description">Điểm</span>
                                            </div>
                                            <div>
                                                <span className="heading">@item.Star</span>
                                                <span className="description">Sao</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3>
                                        @item.FullName<span className="font-weight-light">, @item.Age</span>
                                    </h3>
                                    <div className="h5 font-weight-300">
                                        @if (item.Address != null && item.Region != null && item.City != null)
                                        {
                                            <span style="font-size: 15px;">@item.Address, @item.Region, @item.City</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 order-xl-1">
                        <div className="card bg-secondary shadow">
                            <div className="card-header bg-white border-0">
                                <div className="row align-items-center">
                                    <div className="col-8">
                                        @if (ViewBag.Role != null)
                                        {
                                            <h3 className="mb-0">
                                                Tài khoản của tôi @if (ViewBag.UpdateProfile != null)
                                                {
                                                    <h6> (@ViewBag.UpdateProfile)</h6>
                                                }
                                            </h3>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="card-body" style="background-color: white;">
                                <form>
                                    <h6 className="heading-small text-muted mb-4">Thông tin người dùng</h6>
                                    <div className="pl-lg-4">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-username">Tên đăng nhập</label>
                                                    <input type="text" id="input-username" className="form-control form-control-alternative" value="@item.UserName" disabled>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="form-control-label" htmlFor="input-email">Email</label>
                                                    <input type="email" id="input-email" className="form-control form-control-alternative" value="@item.Email" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label">Mật khẩu</label>
                                                    <br />
                                                    <a href="@Url.Action("","Forgotpassword")" className="btn btn-primary">Thay đổi mật khẩu</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-last-name">Thành phố</label>
                                                    <input type="text" id="input-last-name" className="form-control form-control-alternative" value="@item.City" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-first-name">Đất nước</label>
                                                    <input type="text" id="input-first-name" className="form-control form-control-alternative" value="@item.Region" disabled>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-last-name">Địa chỉ nơi ở</label>
                                                    <input type="text" id="input-last-name" className="form-control form-control-alternative" value="@item.Address" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-username">Tên đầy đủ</label>
                                                    <input type="text" id="input-username" className="form-control form-control-alternative" value="@item.FullName" disabled>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="form-control-label" htmlFor="input-email">Tuổi</label>
                                                    <input type="email" id="input-email" className="form-control form-control-alternative" value="@item.Age" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-school">Trường</label>
                                                    <input type="text" id="input-school" className="form-control form-control-alternative" value="@item.School" disabled>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="form-control-label" htmlFor="input-class">Lớp</label>
                                                    <input type="email" id="input-class" className="form-control form-control-alternative" value="@item.Class" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-username">Giới tính</label>
                                                    @if (item.Gender)
                                                    {
                                                        <input type="text" id="input-username" className="form-control form-control-alternative" value="Nam" disabled>
                                                    }
                                                    else
                                                    {
                                                        <input type="text" id="input-username" className="form-control form-control-alternative" value="Nữ" disabled>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-last-name">Số điện thoại</label>
                                                    <input type="number" id="input-last-name" className="form-control form-control-alternative" value="@item.PhoneNumber" disabled>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        else
        {
            <div className="container-fluid mt--7">
                <div className="row">
                    <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                        <div className="card card-profile shadow">
                            <div className="row justify-content-center">
                                <div className="col-lg-3 order-lg-2">
                                    <div className="card-profile-image">
                                        <a href="#">
                                            @if (item.Picture != null)
                                            {
                                                <img src="~/upload/images/@item.Picture" className="rounded-circle" alt="avatar" width="180" height="180" style="object-fit:cover">
                                            }
                                            else
                                            {
                                                <img src="~/upload/images/icon_user.png" className="rounded-circle" alt="avatar" width="180" height="180" style="object-fit:cover">
                                            }
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4" style="background: transparent">
                            </div>
                            <div className="card-body pt-0 pt-md-4">
                                <div className="row">
                                    <div className="col">
                                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                                            <div>
                                                <span className="heading">@item.Point</span>
                                                <span className="description">Điểm</span>
                                            </div>
                                            <div>
                                                <span className="heading">@item.Star</span>
                                                <span className="description">Sao</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3>
                                        @item.FullName<span className="font-weight-light">, @item.Age</span>
                                    </h3>
                                    <div className="h5 font-weight-300">
                                        @if (item.Address != null && item.Region != null && item.City != null)
                                        {
                                            <span style="font-size: 15px;">@item.Address, @item.Region, @item.City</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 order-xl-1">
                        <div className="card bg-secondary shadow">
                            <div className="card-header bg-white border-0">
                                <div className="row align-items-center">
                                    <div className="col-8">
                                        @if (ViewBag.Role != null)
                                        {
                                            <h3 className="mb-0">
                                                Tài khoản của tôi @if (ViewBag.UpdateProfile != null)
                                                {
                                                    <h6> (@ViewBag.UpdateProfile)</h6>
                                                }
                                            </h3>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="card-body" style="background-color: white;">
                                <form>
                                    <h6 className="heading-small text-muted mb-4">Thông tin người dùng</h6>
                                    <div className="pl-lg-4">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-username">Tên đăng nhập</label>
                                                    <input type="text" id="input-username" className="form-control form-control-alternative" value="@item.UserName" disabled>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="form-control-label" htmlFor="input-email">Email</label>
                                                    <input type="email" id="input-email" className="form-control form-control-alternative" value="@item.Email" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-first-name">Đất nước</label>
                                                    <input type="text" id="input-first-name" className="form-control form-control-alternative" value="@item.Region" disabled>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-last-name">Thành phố</label>
                                                    <input type="text" id="input-last-name" className="form-control form-control-alternative" value="@item.City" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-username">Tên đầy đủ</label>
                                                    <input type="text" id="input-username" className="form-control form-control-alternative" value="@item.FullName" disabled>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-last-name">Địa chỉ nơi ở</label>
                                                    <input type="text" id="input-last-name" className="form-control form-control-alternative" value="@item.Address" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-school">Trường</label>
                                                    <input type="text" id="input-school" className="form-control form-control-alternative" value="@item.School" disabled>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="form-control-label" htmlFor="input-class">Lớp</label>
                                                    <input type="email" id="input-class" className="form-control form-control-alternative" value="@item.Class" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-username">Giới tính</label>
                                                    @if (item.Gender)
                                                    {
                                                        <input type="text" id="input-username" className="form-control form-control-alternative" value="Nam" disabled>
                                                    }
                                                    else
                                                    {
                                                        <input type="text" id="input-username" className="form-control form-control-alternative" value="Nữ" disabled>
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label className="form-control-label" htmlFor="input-email">Tuổi</label>
                                                    <input type="email" id="input-email" className="form-control form-control-alternative" value="@item.Age" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group focused">
                                                    <label className="form-control-label" htmlFor="input-last-name">Số điện thoại</label>
                                                    <input type="number" id="input-last-name" className="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>

    );
}

export default Profile;