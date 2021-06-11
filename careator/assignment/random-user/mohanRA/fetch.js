$(document).ready(function () {
    function getData() {
        const url = "https://randomuser.me/api?results=20";

        $.getJSON(url)
            .then((data) => {
                console.log("success", data);

                data.results.map(function (item) {
                    let pic = (item.picture.large)
                    let name = (item.name.title + "." + item.name.first + " " + item.name.last)
                    let email = (item.email)
                    let dob = (item.dob.date)
                    dob = new Date(dob).toLocaleDateString()
                    let address = (item.location.street.name + " " + item.location.city + " " + item.location.state + " " + item.location.postcode)

                    $(".row").append(
                        `<div class="col-lg-3 col-md-6 col-sm-12 mb-5">

                            <div class="card border-rounded">

                                <div class="card-header">
                                    <img class = "card-img-top rounded-circle p-3" src = " ${pic} ">
                                </div>
                                
                                <div class="card-body" style="height: 90px;overflow: hidden;">
                                    <h5 class="text-center hname" > ${name} </h5>
                                    <h5 class="text-center hadd" > ${address} </h5>
                                    <h5 class="text-center hdob" > ${dob} </h5>
                                    <h5 class="text-center hemail" > ${email} </h5>
                                </div>
                                
                                <div class = "card-footer ">
                                    <div class="d-flex justify-content-center">
                                        <span class="badge bg-info text-dark rounded-pill name" style="margin-right: 4px">Name</span>

                                        <span class="badge bg-info text-dark rounded-pill add" style="margin-right: 4px">Addr</span>
                                        
                                        <span class="badge bg-info text-dark rounded-pill dob" style="margin-right: 4px">D.O.B</span>
                                        
                                        <span class="badge bg-info text-dark rounded-pill email" style="margin-right: 4px">Email</span>
                                    </div>
                                </div>

                            </div>

                        </div>`)

                    updateEvents();

                })
            })
            .catch((err) => {
                console.log("error", err);
            });
    }

    getData();


    function updateEvents() {

        $(".hdob").hide()
        $(".hadd").hide()
        $(".hemail").hide()

        $(".dob").mouseover(function () {
            $(this).parent().parent().prev().children(".hname").hide()
            $(this).parent().parent().prev().children(".hadd").hide()
            $(this).parent().parent().prev().children(".hemail").hide()
            $(this).parent().parent().prev().children(".hdob").fadeIn()
        })

        $(".add").mouseenter(function () {
            $(this).parent().parent().prev().children(".hname").hide()
            $(this).parent().parent().prev().children(".hemail").hide()
            $(this).parent().parent().prev().children(".hdob").hide()
            $(this).parent().parent().prev().children(".hadd").fadeIn()
        })

        $(".name").mouseenter(function () {
            $(this).parent().parent().prev().children(".hadd").hide()
            $(this).parent().parent().prev().children(".hemail").hide()
            $(this).parent().parent().prev().children(".hdob").hide()
            $(this).parent().parent().prev().children(".hname").hide().fadeIn()
        })

        $(".email").mouseenter(function () {
            $(this).parent().parent().prev().children(".hname").hide()
            $(this).parent().parent().prev().children(".hdob").hide()
            $(this).parent().parent().prev().children(".hadd").hide()
            $(this).parent().parent().prev().children(".hemail").fadeIn()
        })


    }

})
