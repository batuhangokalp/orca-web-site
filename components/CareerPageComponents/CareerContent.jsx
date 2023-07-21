import React, { useState } from "react";
import styles from "../../styles/Career.module.css";
import { Box, Button, ButtonBase, TextField } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CareerContent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className={styles.careerContainer}>
      <div className={styles.careerContent}>
        <div>
          <span className={styles.spanHeader}>WANT TO WORK WITH US?</span>
          <div className={styles.rectangle}></div>
        </div>
        <h1>We are looking for new team members</h1>
        <span className={styles.explainSpan}>
          Our team members are motivated by the opportunity to learn everyday.
          You can simply search and send your CV to our open job adverts.
        </span>
        <div className={styles.jobForm}>
          <div className={styles.searchField}>
            <TextField
              fullWidth
              size="small"
              type="text"
              id="search"
              name="search"
              placeholder="Enter Keyword"
            />
            <Button>
              Search
              <AiOutlineSearch size={30} />
            </Button>
          </div>
          <div className={styles.checkBoxForm}>
            <span className={styles.formSpan}>
              I am looking for a job that is:
            </span>
            <div className={styles.jobType}>
              <FormGroup checked={isChecked} onChange={handleCheckboxChange}>
                <FormControlLabel control={<Checkbox />} label="Temporary" />
                <FormControlLabel control={<Checkbox />} label="Contract" />
                <FormControlLabel control={<Checkbox />} label="Permanent" />
              </FormGroup>
            </div>
            <span className={styles.formSpan}>
              I want to work in the following areas:
            </span>
            <div className={styles.jobType}>
            <FormGroup checked={isChecked} onChange={handleCheckboxChange}>
                <FormControlLabel control={<Checkbox />} label="Web Design" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Front End Developer"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Back End Developer"
                />
                <FormControlLabel control={<Checkbox />} label="Marketing" />
              </FormGroup>
            </div>
            <br />
          </div>
          <Button className={styles.findJobsBtn}>Find Jobs</Button>
        </div>
      </div>
    </div>
  );
};

export default CareerContent;
