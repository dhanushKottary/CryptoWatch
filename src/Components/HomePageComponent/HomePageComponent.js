import ChooseComponent from "../ChooseComponent/ChooseComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import TableComponent from "../TableComponent/TableComponent";
import EndComponent from "../EndComponent/EndComponent";

export default function HomePageComponent() {
  return (
    <>
      <NavbarComponent />
      <HeaderComponent />
      <TableComponent />
      <ChooseComponent />
      <EndComponent />
    </>
  );
}
