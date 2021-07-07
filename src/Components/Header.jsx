import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// styles
const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    paddingTop: 70,
    paddingBottom: 100,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className="Header">
      <Grid container justify="center" align="">
        <Grid className={classes.title} item xs={7}>
          <Typography className="title" variant="h3">
            گیلان گردی
          </Typography>
          <Typography className="text" variant="subtitle">
            گردشگری یا توریسم (به انگلیسی: Tourism) سفر به قصد لذت بردن یا
            کسب‌وکار است؛ همچنین به معنی تئوری و عمل سیاحت‌گری، تجارت، جذب،
            اسکان و سرگرمی گردشگران، و تجارت مرتبط به برگزاری تور است.[۲] سازمان
            جهانی گردشگری با توجه به تمامی تعاریف گردشگری که تا قبل از سال ۱۹۹۴
            ارائه شده بودند در سال ۱۹۹۵ یک تعریف نهایی منتشر کرد: «مجموعه
            فعالیت‌های فرد یا افرادی که به مکانی غیر از مکان عادی زندگی خود
            مسافرت و حداقل یک شب و حداکثر یک سال در آنجا اقامت می‌کنند و هدف از
            مسافرت آنان نیز گذراندن اوقات فراغت است. البته اهدافی نظیر اشتغال و
            کسب درآمد شامل آن نمی‌شود.» بر این اساس کسانی که شامل این تعریف
            می‌شوند نیز گردشگر نامیده می‌شوند.[۳] گردشگری می‌تواند داخلی (گردشگر
            در داخل کشور خود مسافرت می‌کند) یا خارجی باشد.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
