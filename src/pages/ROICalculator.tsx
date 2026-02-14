import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Grid,
  Button,
  Slider,
  Tooltip,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Line } from "react-chartjs-2";
import CountUp from "react-countup";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, ChartTooltip, Legend);

const RoiCalculator = () => {
  const [monthlyClaimVolume, setMonthlyClaimVolume] = useState<number | null>(500);
  const [avgReimbursement, setAvgReimbursement] = useState<number | null>(100);
  const [billingSalary, setBillingSalary] = useState<string>("60000");
  const [percentReimbursement, setPercentReimbursement] = useState(85);
  const [resubmissionRate, setResubmissionRate] = useState<number | null>(15);
  const [showResults, setShowResults] = useState(false);

  const billingSalaryNumber = Number(billingSalary) || 0;

  const annualPracticeRevenue =
    monthlyClaimVolume && avgReimbursement
      ? monthlyClaimVolume * avgReimbursement * 12
      : 0;

  const revenueWithCurrent = annualPracticeRevenue * (percentReimbursement / 100);
  const revenueWithViscrow = annualPracticeRevenue * 0.95;
  const potentialGain = revenueWithViscrow - revenueWithCurrent;
  const adjustedAnnualGain = potentialGain - 12000;
  const threeYearGain = adjustedAnnualGain * 3 + billingSalaryNumber * 3;

  const intervals = Array.from({ length: 6 }, (_, i) => `Month ${6 * (i + 1)}`);
  const roiProjection = intervals.map((_, i) => (threeYearGain / 36) * (6 * (i + 1)));

  const otherBillingCostAnnual = (monthlyClaimVolume ?? 0) * (avgReimbursement ?? 0) * 0.06 * 12;
  const otherBillingCostProjection = intervals.map((_, i) => (otherBillingCostAnnual / 36) * (6 * (i + 1)));

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 600, easing: "easeOutQuart" as const },
    interaction: { mode: "index" as const, intersect: false },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: { family: "'Inter', 'Helvetica Neue', sans-serif", size: 13 },
          color: "#555",
          boxWidth: 12,
          boxHeight: 12,
          padding: 20,
        },
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
        enabled: true,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        titleFont: { size: 14, weight: "bold" as const },
        bodyFont: { size: 13 },
        padding: 10,
        cornerRadius: 4,
        displayColors: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#777",
          font: { family: "'Inter', 'Helvetica Neue', sans-serif", size: 12 },
          padding: 8,
        },
        grid: { color: "rgba(0, 0, 0, 0.05)", drawBorder: false },
      },
      y: {
        ticks: {
          color: "#777",
          font: { family: "'Inter', 'Helvetica Neue', sans-serif", size: 12 },
          padding: 8,
          callback: function(value: any) {
            return "$" + value.toLocaleString();
          },
        },
        grid: { color: "rgba(0, 0, 0, 0.05)", drawBorder: false },
      },
    },
    layout: {
      padding: { top: 20, right: 20, bottom: 20, left: 20 },
    },
    elements: {
      point: { radius: 0, hoverRadius: 6 },
      line: { borderWidth: 2 },
    },
  };

  return (
    <Box sx={{ py: 4, backgroundColor: "#ffffff" }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          📊 Calculate Your ROI
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" textAlign="center" mb={2}>
          Estimate your potential reimbursement gains and cost savings over time
        </Typography>
        <Divider sx={{ mb: 3, maxWidth: 200, mx: "auto" }} />

        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Monthly Claim Volume"
                type="number"
                value={monthlyClaimVolume ?? ""}
                onChange={(e) => setMonthlyClaimVolume(e.target.value === "" ? null : Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Avg. Reimbursement per Claim ($)"
                type="number"
                value={avgReimbursement ?? ""}
                onChange={(e) => setAvgReimbursement(e.target.value === "" ? null : Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom>
                Denial Rate: <strong>{100 - percentReimbursement}%</strong>
              </Typography>
              <Slider
                value={percentReimbursement}
                onChange={(_, val) => setPercentReimbursement(val as number)}
                min={60}
                max={100}
                step={1}
                valueLabelDisplay="auto"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Percent Requiring Resubmission"
                type="number"
                value={resubmissionRate ?? ""}
                onChange={(e) => setResubmissionRate(e.target.value === "" ? null : Number(e.target.value))}
                InputProps={{
                  endAdornment: <Typography sx={{ ml: 1 }}>%</Typography>,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" gutterBottom>
                Do you pay an in-house biller?
              </Typography>
              <Box display="flex" gap={2}>
                <Button
                  variant={billingSalary !== "" ? "contained" : "outlined"}
                  onClick={() => setBillingSalary("60000")}
                >
                  Yes
                </Button>
                <Button
                  variant={billingSalary === "" ? "contained" : "outlined"}
                  onClick={() => setBillingSalary("")}
                >
                  No
                </Button>
              </Box>
            </Grid>
            {billingSalary !== "" && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Annual Salary for Medical Coder/Biller"
                  type="number"
                  value={billingSalary}
                  onChange={(e) => setBillingSalary(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <Tooltip title="Includes salary + payroll expenses">
                        <IconButton size="small">
                          <InfoIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    ),
                  }}
                />
              </Grid>
            )}
          </Grid>

          <Accordion sx={{ mt: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="medium">Advanced Settings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                Optional configurations for assumptions like growth rate, payer mix, etc.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Box mt={3} display="flex" justifyContent="center" gap={2} flexWrap="wrap">
            <Button variant="contained" size="large" onClick={() => setShowResults(true)}>
              Calculate ROI
            </Button>
            <Button variant="contained" size="large" color="primary">
              Talk to Sales
            </Button>
          </Box>

          {showResults && (
            <>
              <Box
                sx={{
                  mt: 4,
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "#f5f5f5",
                  color: "#000"
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  ROI Summary
                </Typography>
                <Grid container spacing={1}>
                  {[
                    { label: "Estimated Annual Revenue:", value: annualPracticeRevenue },
                    { label: "Current Reimbursement Revenue:", value: revenueWithCurrent },
                    { label: "Revenue at 95% Efficiency:", value: revenueWithViscrow },
                    { label: "Our Medical Billing Cost:", value: 12000 },
                    { label: "Other Billing Cost (est.):", value: otherBillingCostAnnual },
                    { label: "Potential Annual Gain (After Cost):", value: adjustedAnnualGain },
                    { label: "3-Year ROI (After Cost + Salary Savings):", value: threeYearGain },
                  ].map((item, idx) => (
                    <React.Fragment key={idx}>
                      <Grid item xs={12} sm={6}>
                        <Typography>{item.label}</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography align="right">
                          <CountUp end={item.value} duration={1.6} prefix="$" separator="," />
                        </Typography>
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>
              </Box>

              <Box mt={4} height={{ xs: 280, sm: 340, md: 400 }}>
                <Line
                  data={{
                    labels: intervals,
                    datasets: [
                      {
                        label: "3-Year Cumulative ROI Projection",
                        data: roiProjection,
                        borderColor: "#2196f3",
                        backgroundColor: "rgba(33, 150, 243, 0.35)",
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0,
                      },
                      {
                        label: "Other Billing Cost (ex. Kareo/AdvancedMD)",
                        data: otherBillingCostProjection,
                        borderColor: "#ff8a00",
                        backgroundColor: "rgba(255, 138, 0, 0.35)",
                        fill: true,
                        tension: 0.3,
                        pointRadius: 0,
                      },
                    ],
                  }}
                  options={chartOptions}
                />
              </Box>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default RoiCalculator;