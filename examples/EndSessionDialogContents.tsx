import * as React from "react";
import { flatMap } from "lodash";
import classnames from "classnames";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { darken } from "@material-ui/core/styles/colorManipulator";
import {
  CircularProgress,
  withStyles,
  createStyles,
  Button as MuiButton,
  WithStyles,
  Typography,
  Tooltip,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "components/Button";
import { Progress } from "./Progress";
import {
  Lesson,
  ProgressItem,
  EnrolledLesson,
  TutorialUser,
} from "constants/types";
import LessonStatus from "constants/lesson-status";

export enum States {
  CONFIRM = "CONFIRM",
  END_SESSION_AND_LOAD_PROGRESS = "LOADING_LESSONS_AND_MARKING",
  MARKING = "MARKING",
  NO_MARKING = "NO_MARKING",
  ERROR = "ERROR",
}

const colorButton = (background, foreground = "white") => {
  return {
    backgroundColor: background,
    color: foreground,
    border: "none",
    "&:hover": {
      backgroundColor: darken(background, 0.1),
    },
    "&:disabled": {
      opacity: 0.5,
      color: foreground,
    },
  };
};

const styles = createStyles({
  dialogContent: {
    position: "relative",
    width: 550,
    minHeight: 50,
  },
  gridFix: {
    // The Material UI Grid component uses negative margins, and forces its width
    // to be wider than its parent. This can cause scrollbars where we don't
    // want them.
    overflow: "hidden",
  },
  text: {
    paddingTop: 20,
  },
  endedHeader: {
    background: "#dcf0dc",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  markingRemaining: {
    background: "#fff1cf",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonRoot: {
    position: "relative",
  },
  circularProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },

  lesson: {
    border: "1px solid #d0d4d9",
    borderRadius: 5,
    marginBottom: 10,
    overflow: "hidden",
  },
  lessonHeader: {
    background: "#f0f2f7",
    padding: "5px 10px",
  },
  row: {
    padding: "5px 10px",
    display: "flex",
    alignItems: "center",
    borderTop: "1px solid #d0d4d9",
  },
  unfinishedRow: {
    background: "#fff1cf",
  },
  rowButtons: {
    flex: "1 0 auto",
    textAlign: "right",
  },

  miniButton: {
    minWidth: 32,
    marginLeft: 10,
    ...colorButton("#545962"),
  },
  [Progress.NEW_CONTENT_LEARNT]: {
    ...colorButton("#3793d7"),
  },
  [Progress.KNOWLEDGE_REINFORCED]: {
    ...colorButton("#43a547"),
  },
  [Progress.NEEDS_MORE_WORK]: {
    ...colorButton("#f59929"),
  },
  [Progress.NOT_TAUGHT]: {
    ...colorButton("#d0d4d9", "#444444"),
  },

  lessonStatusButton: {
    marginLeft: 10,
    paddingLeft: 15,
    paddingRight: 15,
    ...colorButton("#d0d4d9", "#444444"),
  },
  lessonStatusButtonActive: {
    ...colorButton("#ed5f63"),
  },
});

const getProgressForObjective = (objective, progressList) => {
  const progressItem = progressList.find(
    (item) => item.learningObjectiveId === objective.id
  );
  return progressItem ? progressItem.progress : null;
};
const getEnrolledLesson = (
  enrolledLessons: EnrolledLesson[],
  lessonId: string
): EnrolledLesson | undefined => {
  return enrolledLessons.find((lesson) => lesson.lessonId === lessonId);
};

const getNumberOfItemsRemaining = (
  lessons?: Lesson[],
  progressList?: ProgressItem[],
  enrolledLessons?: EnrolledLesson[]
) => {
  if (!lessons || !progressList || !enrolledLessons) {
    return 0;
  }

  const numberOfUnmarkedObjectives = flatMap(
    lessons,
    (lesson) => lesson.learningObjectives
  ).filter(
    (objective) => getProgressForObjective(objective, progressList) === null
  ).length;

  const numberOfTaughtEnrolledLessonsWithoutStatus = lessons
    .map((lesson) => getEnrolledLesson(enrolledLessons, lesson.id))
    .filter((enrolledLesson) => enrolledLesson && !enrolledLesson.status)
    .length;

  return (
    numberOfUnmarkedObjectives + numberOfTaughtEnrolledLessonsWithoutStatus
  );
};

const getButtonTextForProgress = (progress: Progress | null) => {
  switch (progress) {
    case Progress.NEW_CONTENT_LEARNT:
      return "L";
    case Progress.KNOWLEDGE_REINFORCED:
      return "R";
    case Progress.NEEDS_MORE_WORK:
      return "W";
    case Progress.NOT_TAUGHT:
      return "N";
    default:
      return "";
  }
};

const getButtonTooltipForProgress = (progress: Progress | null) => {
  switch (progress) {
    case Progress.NEW_CONTENT_LEARNT:
      return "New content learnt";
    case Progress.KNOWLEDGE_REINFORCED:
      return "Knowledge reinforced";
    case Progress.NEEDS_MORE_WORK:
      return "Needs more work";
    case Progress.NOT_TAUGHT:
      return "Not taught";
    default:
      return "";
  }
};

const buttonList = [
  Progress.NEW_CONTENT_LEARNT,
  Progress.KNOWLEDGE_REINFORCED,
  Progress.NEEDS_MORE_WORK,
  Progress.NOT_TAUGHT,
];

const ProgressButtons = ({
  classes,
  disabled,
  progress,
  objectiveId,
  onSetProgress,
}) => {
  return (
    <div className={classes.rowButtons}>
      {buttonList.map((buttonProgress) => (
        <Tooltip
          key={buttonProgress}
          enterDelay={1000}
          title={getButtonTooltipForProgress(buttonProgress)}
        >
          <span>
            <MuiButton
              size="small"
              disabled={disabled}
              className={classnames(classes.miniButton, {
                [classes[buttonProgress]]: progress === buttonProgress,
              })}
              onClick={() => onSetProgress(objectiveId, buttonProgress)}
            >
              {getButtonTextForProgress(buttonProgress)}
            </MuiButton>
          </span>
        </Tooltip>
      ))}
    </div>
  );
};

const LessonStatusButtons = ({
  classes,
  disabled,
  lessonStatus,
  onSetLessonStatus,
  showTeachLater,
}) => {
  return (
    <>
      <MuiButton
        size="small"
        disabled={disabled}
        className={classnames(classes.lessonStatusButton, {
          [classes.lessonStatusButtonActive]:
            lessonStatus === LessonStatus.IN_PROGRESS,
        })}
        onClick={() => onSetLessonStatus(LessonStatus.IN_PROGRESS)}
      >
        Teach next time
      </MuiButton>
      {showTeachLater && (
        <MuiButton
          size="small"
          disabled={disabled}
          className={classnames(classes.lessonStatusButton, {
            [classes.lessonStatusButtonActive]:
              lessonStatus === LessonStatus.INCOMPLETE,
          })}
          onClick={() => onSetLessonStatus(LessonStatus.INCOMPLETE)}
        >
          Teach later
        </MuiButton>
      )}
      <MuiButton
        size="small"
        disabled={disabled}
        className={classnames(classes.lessonStatusButton, {
          [classes.lessonStatusButtonActive]:
            lessonStatus === LessonStatus.COMPLETED,
        })}
        onClick={() => onSetLessonStatus(LessonStatus.COMPLETED)}
      >
        Finished
      </MuiButton>
    </>
  );
};

interface EndSessionDialogProps extends WithStyles<typeof styles> {
  state: States;
  student?: TutorialUser;
  lessons?: Lesson[];
  progressList?: ProgressItem[];
  enrolledLessons?: EnrolledLesson[];
  isSaving?: boolean;
  rowsSaving?: string[];
  onStay: () => void;
  onEnd: () => void;
  onSetProgress: (objectiveId: string, newProgress: Progress) => void;
  onSetLessonStatus: (lessonId: string, newStatus: LessonStatus) => void;
  onBackToDashboard: () => void;
}
const EndSessionDialogContent: React.StatelessComponent<EndSessionDialogProps> = ({
  classes,
  state,
  student,
  lessons,
  progressList,
  enrolledLessons,
  isSaving = false,
  rowsSaving,
  onStay,
  onEnd,
  onSetProgress,
  onSetLessonStatus,
  onBackToDashboard,
}) => {
  const remaining = getNumberOfItemsRemaining(
    lessons,
    progressList,
    enrolledLessons
  );

  return (
    <>
      <DialogContent className={classes.dialogContent}>
        {state === States.CONFIRM && (
          <DialogContentText align={"center"} className={classes.text}>
            {student
              ? `Would you like to end ${student.firstName}'s session?`
              : "Would you like to end this session?"}
          </DialogContentText>
        )}
        {state === States.END_SESSION_AND_LOAD_PROGRESS && (
          <CircularProgress size={24} className={classes.circularProgress} />
        )}
        {state === States.ERROR && (
          <DialogContentText align={"center"} className={classes.text}>
            ⚠️ Unable to load marking
          </DialogContentText>
        )}
        {state === States.NO_MARKING && (
          <DialogContentText align={"center"} className={classes.text}>
            Session ended. You won't be heard.
          </DialogContentText>
        )}
        {state === States.MARKING && (
          <>
            <DialogContentText align={"center"} className={classes.endedHeader}>
              The student's session has ended. You won't be heard.
              <br />
              Please review your marking.
            </DialogContentText>

            {remaining > 0 && (
              <DialogContentText
                align={"center"}
                className={classes.markingRemaining}
              >
                You still have <b>{remaining}</b> items to mark before leaving.
              </DialogContentText>
            )}

            {lessons.map((lesson) => {
              const enrolledLesson = getEnrolledLesson(
                enrolledLessons,
                lesson.id
              );
              return (
                <div key={lesson.id} className={classes.lesson}>
                  <div className={classes.lessonHeader}>
                    <Typography variant="subtitle1">{lesson.title}</Typography>
                  </div>
                  {lesson.learningObjectives.map((objective) => {
                    const progress = getProgressForObjective(
                      objective,
                      progressList
                    );
                    return (
                      <div
                        key={objective.id}
                        className={classnames(classes.row, {
                          [classes.unfinishedRow]: !progress,
                        })}
                      >
                        <Typography color="textSecondary">
                          {objective.title}
                        </Typography>
                        <ProgressButtons
                          classes={classes}
                          disabled={rowsSaving.includes(objective.id)}
                          progress={progress}
                          objectiveId={objective.id}
                          onSetProgress={onSetProgress}
                        />
                      </div>
                    );
                  })}
                  {enrolledLesson && (
                    <div
                      className={classnames(classes.row, {
                        [classes.unfinishedRow]:
                          enrolledLesson.status === undefined,
                      })}
                    >
                      <Typography color="textSecondary">
                        Lesson status
                      </Typography>
                      <div className={classes.rowButtons}>
                        <LessonStatusButtons
                          classes={classes}
                          disabled={rowsSaving.includes(enrolledLesson.id)}
                          lessonStatus={enrolledLesson.status}
                          onSetLessonStatus={(newStatus) =>
                            onSetLessonStatus(enrolledLesson.id, newStatus)
                          }
                          showTeachLater={lessons.length > 1}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </DialogContent>
      <DialogActions className={classes.gridFix}>
        <Grid container spacing={16} justify="center">
          {state === States.CONFIRM && (
            <>
              <Grid item>
                <Button onClick={onStay}>No, stay</Button>
              </Grid>
              <Grid item>
                <div className={classes.buttonRoot}>
                  <Button onClick={onEnd} inverted>
                    Yes, end it
                  </Button>
                </div>
              </Grid>
            </>
          )}
          {state !== States.CONFIRM && (
            <Grid item>
              <div className={classes.buttonRoot}>
                <Button
                  disabled={
                    isSaving ||
                    state === States.END_SESSION_AND_LOAD_PROGRESS ||
                    remaining > 0
                  }
                  onClick={onBackToDashboard}
                >
                  Back to dashboard
                </Button>
                {isSaving &&
                  remaining === 0 &&
                  state !== States.END_SESSION_AND_LOAD_PROGRESS && (
                    <CircularProgress
                      size={24}
                      className={classes.circularProgress}
                    />
                  )}
              </div>
            </Grid>
          )}
        </Grid>
      </DialogActions>
    </>
  );
};

export default withStyles(styles)(EndSessionDialogContent);
