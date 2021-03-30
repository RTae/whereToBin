import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function SweetAlertModal(result) {
  MySwal.fire({
    title: "Your result picture",
    imageUrl:
  });
  return null;
}

export default SweetAlertModal;
