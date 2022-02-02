import { uris } from "./URI";
import LoginPage from "../../Views/Page/Auth/Login/Index";
import OtpPage from "../../Views/Page/Auth/Otp/Index";
import RegistrationType from "../../Views/Page/Auth/RegistrationType/Index";
import NgoProfile from "../../Views/Page/Profile/Ngo/Main";
import VolunteerProfile from "../../Views/Page/Profile/Volunteer/Index";
import ProfileCreated from "../../Views/Page/Profile/Created/Index";
import Dashboard from "../../Views/Page/Dashboard/Home/Index";
import DonorsList from "../../Views/Page/Dashboard/Donors/Index";
import ReceiptsList from "../../Views/Page/Dashboard/Receipts/Index";
import VolunteersList from "../../Views/Page/Dashboard/Volunteers/Index";
import CreateDonor from "../../Views/Page/Dashboard/Donors/CreateDonor/Index";
import CreateReceipt from "../../Views/Page/Dashboard/Receipts/CreateReciept/Main";
import ReceiptGenerated from "../../Views/Page/Dashboard/Receipts/ReceiptGenerated/Index";
import CreateVolunteer from "../../Views/Page/Dashboard/Volunteers/CreateVolunteer/Index";

const router = [
    {
        id: 1,
        path: uris.login,
        element: < LoginPage />
    },
    {
        id: 2,
        path: uris.otp,
        element: < OtpPage />
    },
    {
        id: 3,
        path: uris.registration,
        element: < RegistrationType />
    },
    {
        id: 4,
        path: uris.registerNgo,
        element: < NgoProfile />
    },
    {
        id: 5,
        path: uris.registerVolunteer,
        element: < VolunteerProfile />
    },
    {
        id: 6,
        path: uris.profileCreated,
        element: < ProfileCreated />
    },
    {
        id: 7,
        path: uris.dashboard,
        element: < Dashboard />
    },
    {
        id: 8,
        path: uris.donors,
        element: < DonorsList />
    },
    {
        id: 9,
        path: uris.createDonors,
        element: < CreateDonor />
    },
    {
        id: 10,
        path: uris.receipts,
        element: < ReceiptsList />
    },
    {
        id: 11,
        path: uris.createReceipt,
        element: < CreateReceipt />
    },
    {
        id: 13,
        path: uris.viewReceipt,
        element: < ReceiptGenerated />
    },
    {
        id: 14,
        path: uris.volunteer,
        element: < VolunteersList />
    },
    {
        id: 15,
        path: uris.createVolunteer,
        element: < CreateVolunteer />
    }
]

export default router;
