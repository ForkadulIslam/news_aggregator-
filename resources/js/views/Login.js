
import LoginComp from "../components/LoginComp";
import RegistrationComp from "../components/RegComp";

function Login() {
    return (
        <div>
            {/* Start inner page Banner */}

            {/* End inner page Banner */}
            {/* start contact-section-layout-1 */}
            <div className="contact-section-layout-1 section-padding-2">
                <div className="container">
                    <div className="row gutter-30 justify-content-between">
                        <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="800ms">
                            <LoginComp/>
                        </div>
                        {/* end col */}
                        <div className="col-xl-5 col-lg-6 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="800ms">
                            <RegistrationComp/>
                        </div>
                        {/* end col */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </div>
            {/* end contact-section-layout-1 */}
        </div>
    )
}

export default Login;
