import Progress from 'constants/progress';
import LessonStatus from './lesson-status';
import UserRole from 'constants/user-role';
import TutorialState from './tutorial-state';
import AudioStack from './audio-stack';
import MessagingStack from './messaging-stack';
import TutorialType from './tutorial-type';
import { User } from 'matr-auth-client-lib';

export interface Tutorial {
  id: string;
  state: TutorialState;
  users: TutorialUser[];
  startTime: string | null;
  endTime: string | null;
  audioStack?: AudioStack;
  messagingStack?: MessagingStack;
  type: TutorialType;
}

export interface TutorialUser {
  userId: string;
  role: UserRole;
  firstName: string;
  lastName: string | null;
}

export interface Lesson {
  id: string;
  title: string;
  learningObjectives: LearningObjective[];
  slideUrls: string[];
  slideNotes: string[];
}

export interface EnrolledLesson {
  id: string;
  lessonId: string;
  lessonTitle: string;
  programmeId: string;
  programmeName: string;
  // We make this optional as in the UI we need to be able to differentiate
  // between not set and incomplete.
  status?: LessonStatus;
  order: number;
}

export enum QuizLevel {
  EXCEEDING = 'EXCEEDING',
  WORKING_AT = 'WORKING_AT',
  EMERGING = 'EMERGING',
  BELOW = 'BELOW',
}

export interface QuizOutcome {
  lessonId: string;
  testOutcome: QuizLevel;
}

export interface Session {
  id: string;
  studentId: string;
  tutorialId: string;
  lessonIds: string[];
  preQuizCompleted: boolean;
  preQuizOutcome: QuizOutcome[];
  postQuizCompleted: boolean;
  postQuizOutcome: QuizOutcome[];
  startTime: string;
  endTime: string;
  completed: boolean;
  postTutorialSurveyCompleted: boolean;
  preTutorialMoodSurveyCompleted: boolean;
  postTutorialMoodSurveyCompleted: boolean;
  tutorial: {
    id: string;
    sessionId: string;
    startedAt: string;
    endedAt: string;
    tutorId: string;
  };
}

export interface TslCurriculumItem {
  categories: string[];
  categories_positions: number[];
  description: string;
  granule_id: number;
  id: number;
  levels: string[];
  title: string;
  topics: string[];
  type: string;
  years: string[];
}

export interface Slide {
  notes: string;
}

export interface Worksheet {
  type: string;
  pageId: number;
}

export interface LearningObjective {
  id: string;
  title: string;
  order: number;
  lessonId: number;
  suggestedLessonId: number;
}

export interface ProgressItem {
  id: string;
  tutorialId: string;
  learningObjectiveId: string;
  progressUpdatedAt: string;
  progress: Progress;
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export enum BarrierType {
  DYSLEXIA = 'DYSLEXIA',
  ADD_ADHD = 'ADD_ADHD',
  DYSCALCULIA = 'DYSCALCULIA',
  SPEECH_LANGUAGE_DIFFICULTIES = 'SPEECH_LANGUAGE_DIFFICULTIES',
  AUTISM = 'AUTISM',
  ASPERGER_SYNDROME = 'ASPERGER_SYNDROME',
  READING_DIFFICULTIES = 'READING_DIFFICULTIES',
}

export enum Severity {
  MILD = 'MILD',
  MODERATE = 'MODERATE',
  SEVERE = 'SEVERE',
}

export enum MathsLevel {
  EMERGING = 'EMERGING',
  WORKING_AT = 'WORKING_AT',
  EXCEEDING = 'EXCEEDING',
  UNKNOWN = 'UNKNOWN',
}

export enum SpeakingEnglishLevel {
  DIFFICULT = 'DIFFICULT',
  OK = 'OK',
  EASY = 'EASY',
}

export enum UnderstandingEnglishLevel {
  DIFFICULT = 'DIFFICULT',
  OK = 'OK',
  EASY = 'EASY',
}

export enum YearGroup {
  YEAR_1 = 'YEAR_1',
  YEAR_2 = 'YEAR_2',
  YEAR_3 = 'YEAR_3',
  YEAR_4 = 'YEAR_4',
  YEAR_5 = 'YEAR_5',
  YEAR_6 = 'YEAR_6',
  YEAR_7 = 'YEAR_7',
}

export interface LearningBarrier {
  id: number;
  barrierType: BarrierType;
  severity: Severity;
}

export interface StudentData {
  customerId: string;
  dateOfBirth: string | null;
  email: string | null;
  englishFirstLanguage: boolean;
  gender: Gender;
  learningBarriers: LearningBarrier[];
  mathsLevel: MathsLevel;
  name: string;
  noteToTutor: string | null;
  programmeId: string;
  programmeName: string;
  subscriptionDuration: string;
  speakingEnglishLevel: SpeakingEnglishLevel | null;
  understandingEnglishLevel: UnderstandingEnglishLevel | null;
  userId: string;
  yearGroup: YearGroup;
}

export enum AuditTrailEventType {
  AUDIO_TEST_SUCCESS = 'AUDIO_TEST_SUCCESS',
  AUDIO_TEST_FAILURE = 'AUDIO_TEST_FAILURE',
  ECHO_TEST_SUCCESS = 'ECHO_TEST_SUCCESS',
  ECHO_TEST_FAILURE = 'ECHO_TEST_FAILURE',
  SESSION_STARTED = 'SESSION_STARTED',
  SESSION_COMPELETED = 'SESSION_COMPELETED',
  TUTORIAL_STARTED = 'TUTORIAL_STARTED',
  TUTORIAL_FINISHED = 'TUTORIAL_FINISHED',
  LESSON_ENROLLED = 'LESSON_ENROLLED',
  STUDENT_CREATED = 'STUDENT_CREATED',
  STUDENT_PROFILE_UPDATED = 'STUDENT_PROFILE_UPDATED',
  LOGIN = 'LOGIN',
  SOFT_DELETE_SUCCESS = 'SOFT_DELETE_SUCCESS',
  SOFT_DELETE_FAILURE = 'SOFT_DELETE_FAILURE',
  HARD_DELETE_SUCCESS = 'HARD_DELETE_SUCCESS',
  HARD_DELETE_FAILURE = 'HARD_DELETE_FAILURE',
  ECHO_TEST_MEDIA_DEVICES_NOT_ALLOWED = 'ECHO_TEST_MEDIA_DEVICES_NOT_ALLOWED',
  ECHO_TEST_MEDIA_DEVICES_PERMISSION_DISMISSED = 'ECHO_TEST_MEDIA_DEVICES_PERMISSION_DISMISSED',
  ECHO_TEST_MEDIA_DEVICES_NOT_FOUND = 'ECHO_TEST_MEDIA_DEVICES_NOT_FOUND',
  PRE_TUTORIAL_QUIZ_COMPLETED = 'PRE_TUTORIAL_QUIZ_COMPLETED',
  POST_TUTORIAL_QUIZ_COMPLETED = 'POST_TUTORIAL_QUIZ_COMPLETED',
  POST_TUTORIAL_FEEDBACK_SURVEY_COMPLETED = 'POST_TUTORIAL_FEEDBACK_SURVEY_COMPLETED',
  PRE_TUTORIAL_MOOD_SURVEY_COMPLETED = 'PRE_TUTORIAL_MOOD_SURVEY_COMPLETED',
  POST_TUTORIAL_MOOD_SURVEY_COMPLETED = 'POST_TUTORIAL_MOOD_SURVEY_COMPLETED',
  PRE_TUTORIAL_ATTITUDE_SURVEY_COMPLETED = 'PRE_TUTORIAL_ATTITUDE_SURVEY_COMPLETED',
  POST_TUTORIAL_ATTITUDE_SURVEY_COMPLETED = 'POST_TUTORIAL_ATTITUDE_SURVEY_COMPLETED',
}

export interface AuditTrailEvent {
  id: string;
  userId: string;
  eventType: AuditTrailEventType;
  createdAt: string;
  metadata: object;
}

export type MatrAuth0User = User;

export interface MatrStudentUser {
  studentId: string;
  accessToken: string;
  supervisorId: string;
}

export interface TslUser {
  userId: string;
}

export type AuthUser = MatrAuth0User | MatrStudentUser | TslUser;
