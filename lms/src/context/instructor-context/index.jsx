import { courseCurriculumInitialFormData, courseLandingPageFormControls } from "@/config";
import { createContext, useState } from "react";

export const InstructorContext = createContext(null);

export default function InstructorProvider({ children }) {
    const [courseLandingFormData, setCourseLandingFormData] = useState(courseLandingPageFormControls);
    const [courseCurriculumFormData, setCourseCurriculumFormData] = useState(courseCurriculumInitialFormData);

    return (
        <InstructorContext.Provider value={{ courseLandingFormData, setCourseLandingFormData, courseCurriculumFormData, setCourseCurriculumFormData }}>
            {children}
        </InstructorContext.Provider>
    );
}
