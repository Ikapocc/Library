import { useContext } from "react";
import { lectureCreate } from "../components/context/contextLecture";

export default function useLecture() {
    const lecture = useContext(lectureCreate)

    return lecture
}