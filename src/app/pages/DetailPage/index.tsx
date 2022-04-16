import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { OneColumnLayout } from 'app/components/Layout';
import { Helmet } from 'react-helmet-async';
import { BreadcumbItem, DetailPageWrapper, ImageBox, InforBox } from './style';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import image from './assets/ImageDetail.png';
import List from 'app/components/List';

export function DetailPage() {
  return (
    <>
      <Helmet>
        <title>Truyện tranh</title>
      </Helmet>
      <OneColumnLayout>
        <DetailPageWrapper>
          <Box sx={{ pt: '30px', pb: '50px' }}>
            <BreadcumbItem>Trang chủ</BreadcumbItem> /{' '}
            <BreadcumbItem>Truyện tranh</BreadcumbItem> /{' '}
            <BreadcumbItem className="selected">
              Tranh truyện dân gian Việt Nam - Lý Ông Trọng
            </BreadcumbItem>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <ImageBox>
                <img
                  src={image}
                  alt="Tranh truyện dân gian Việt Nam - Lý Ông Trọng"
                />
              </ImageBox>
            </Grid>
            <Grid item xs={12} md={7}>
              <InforBox>
                <Box className="title">
                  Tranh truyện dân gian Việt Nam - Lý Ông Trọng
                </Box>
                <hr />
                <Grid container rowSpacing={2} className="infor">
                  <Grid item md={6} className="left">
                    <Typography component="p">
                      <FiberManualRecordIcon />
                      Giá bán:{' '}
                      <span className="price">
                        {Number('18000000').toLocaleString('en-US')} VNĐ
                      </span>
                    </Typography>
                    <Typography component="p">
                      <FiberManualRecordIcon />
                      Tác giả: <span>Tân Hoàng Minh</span>
                    </Typography>
                    <Typography component="p">
                      <FiberManualRecordIcon />
                      Số trang: <span>300</span>
                    </Typography>
                    <Typography component="p">
                      <FiberManualRecordIcon />
                      Số lượng: <span>100</span>
                    </Typography>
                  </Grid>
                  <Grid item md={6} className="right">
                    <Button
                      variant="contained"
                      startIcon={<AddShoppingCartIcon fontSize="large" />}
                      sx={{
                        fontWeight: 'bold',
                        color: '#000',
                        padding: '10px 20px',
                      }}
                    >
                      Thêm vào giỏ hàng
                    </Button>
                  </Grid>
                </Grid>
                <hr />
                <Box className="description">
                  <Typography component="p">Giới thiệu sách</Typography>
                  <Typography component="p">
                    Một ngày nọ, cậu bé 3 tuổi Maris bỗng xuất hiện trước mặt
                    tam ma vương tàn ác thống trị ma giới. Họ sẽ xử tử, bắt nhóc
                    tì làm nô lệ, hay... nuôi dạy bé? Và thế là hành trình nuôi
                    dạy trẻ của 3 người đàn ông kéo theo toàn thể ma giới, bắt
                    đầu! Nếu đã mê những tác phẩm với phong cách hài hước, giật
                    gân với bối cảnh giả tưởng, nhưng để lại sau đó là những
                    thông điệp rất đáng suy ngẫm ngoài đời thực, thì MA VƯƠNG
                    BẢO MẪU chính là series tiếp theo mà bạn nên sở hữu! Bằng
                    phong cách thể hiện "rất đỗi tự nhiên", tác giả Kousuke
                    Iijima sẽ dẫn bạn vào những câu chuyện dở khóc dở cười xoay
                    quanh việc nuôi dạy một chú nhóc loài người của "ba ông bố
                    Ma Vương"! Dễ thương xỉu đấy, hài hước vô cùng đấy, và chỉ
                    cần có "tình yêu thương", thì mọi ranh giới đều có thể xóa
                    nhòa! Hãy cùng thưởng thức trọn bộ 8 tập truyện của MA VƯƠNG
                    BẢO MẪU, bắt đầu từ ngày 18.04.2022 nha. Một ngày nọ, cậu bé
                    3 tuổi Maris bỗng xuất hiện trước mặt tam ma vương tàn ác
                    thống trị ma giới. Họ sẽ xử tử, bắt nhóc tì làm nô lệ,
                    hay... nuôi dạy bé? Và thế là hành trình nuôi dạy trẻ của 3
                    người đàn ông kéo theo toàn thể ma giới, bắt đầu! Nếu đã mê
                    những tác phẩm với phong cách hài hước, giật gân với bối
                    cảnh giả tưởng, nhưng để lại sau đó là những thông điệp rất
                    đáng suy ngẫm ngoài đời thực, thì MA VƯƠNG BẢO MẪU chính là
                    series tiếp theo mà bạn nên sở hữu! Bằng phong cách thể hiện
                    "rất đỗi tự nhiên", tác giả Kousuke Iijima sẽ dẫn bạn vào
                    những câu chuyện dở khóc dở cười xoay quanh việc nuôi dạy
                    một chú nhóc loài người của "ba ông bố Ma Vương"! Dễ thương
                    xỉu đấy, hài hước vô cùng đấy, và chỉ cần có "tình yêu
                    thương", thì mọi ranh giới đều có thể xóa nhòa! Hãy cùng
                    thưởng thức trọn bộ 8 tập truyện của MA VƯƠNG BẢO MẪU, bắt
                    đầu từ ngày 18.04.2022 nha.
                  </Typography>
                </Box>
              </InforBox>
            </Grid>
          </Grid>

          <List />
        </DetailPageWrapper>
      </OneColumnLayout>
    </>
  );
}
