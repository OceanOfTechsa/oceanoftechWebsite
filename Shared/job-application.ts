export interface IJobListing {
  _id: string
  title: string
}

type AcademicRecordType = File | null
 

export interface EducationalBackground {
  id: string
  educational_level: string
  institution: string
  start_date: string
  end_date: string
  d_or_c: string
  field_of_study: string
  academicRecord: AcademicRecordType
}

export interface WorkExperience {
  id: string
  job_title: string
  company: string
  work_start_date: string
  work_end_date: string
  responsibilities: string
}

export interface JobApplicationFormData {
  // Personal Details
  name: string
  surname: string
  email: string
  phone: string
  dob: string
  p_g_link: string
  about: string

  // Educational Background
  educationalBackgrounds: EducationalBackground[]
  academicRecord?: AcademicRecordType;

  // Work Experience
  workExperiences: WorkExperience[]

  // Supporting Documents
  resume: File | null
  CoverLetter: File | null
  other: File | null

  // Agreement
  agree: boolean
}

export interface JobApplicationErrors {
  nameError: boolean
  surnameError: boolean
  emailError: boolean
  phoneError: boolean
  dobError: boolean
  aboutError: boolean
  educationalBackgroundsError: { [key: string]: { [field: string]: boolean } }
  workExperiencesError: { [key: string]: { [field: string]: boolean } }
  resumeError: boolean
  CoverLetterError: boolean
  otherError: boolean
}
