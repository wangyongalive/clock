<template>
  <div class="main">
    <canvas id="canvas" style="border:1px solid #000;margin:0 auto;"/>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        digit: [
          [  //digit 0
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
          ],
          [ //digit 1
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0]
          ],
          [ //digit 2
            [0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1]
          ],
          [ //digit 3
            [0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 1, 0, 0]
          ],
          [ //digit 4
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0]
          ],
          [ //digit 5
            [0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 1, 1, 0, 0]
          ],
          [ //digit 6
            [0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 1, 0, 0]
          ],
          [ //digit 7
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0]
          ],
          [ //digit 8
            [0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 1, 0, 0]
          ],
          [ //digit 9
            [0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 1, 1, 0]
          ],
          [ //char :
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
          ]
        ],
        R: 8,
        D: 17,
        // END_TIME: new Date(2019, 3, 20, 15, 30, 0),
        END_TIME: new Date(),
        WIDTH: 0,
        HEIGHT: 0,
        TOP_MARGIN: 0,
        LEFT_MARGIN: 0,
        curShowTimeSeconds: 0,
        ballColor: ["#33b5e5", "#0099cc", "#aa66cc", "#9933cc", "#9900cc",
          "#669900", "#ffbb33", "#ff8800", "#ff4444", "#cc0000"],
        balls: [],
      }
    },
    mounted() {

      // 自适应屏幕高度和宽度
      this.WIDTH = document.documentElement.clientWidth; // 画布宽度
      this.HEIGHT = document.documentElement.clientHeight * 3 / 5; // 画布高度
      this.TOP_MARGIN = this.HEIGHT / 5; // 数字的顶部空白
      this.LEFT_MARGIN = this.WIDTH / 6; // 数字左方空白

      let canvas = document.getElementById("canvas");
      canvas.width = this.WIDTH;
      canvas.height = this.HEIGHT;
      this.context = canvas.getContext('2d');
      this.curShowTimeSeconds = this.getCurrentShowTimeSeconds(); // 当前展示时间

      this.animated();

    },
    methods: {
      getCurrentShowTimeSeconds() {
        let curTime = new Date(); // 当前时间
        let ret = this.END_TIME.getTime() + 1000 * 60 * 60 - curTime.getTime(); // 倒计时时间
        ret = Math.round(ret / 1000); // 毫秒变为秒
        return ret >= 0 ? ret : 0;
      },
      drawDigit(ctx) {
        let hour = parseInt(this.curShowTimeSeconds / 3600); // 小时
        let minutes = parseInt(this.curShowTimeSeconds / 60 - hour * 60); // 分钟
        let second = this.curShowTimeSeconds % 60; // 秒

        ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);//清空画布

        /*  渲染数值 */
        this.randDigit(this.LEFT_MARGIN, this.TOP_MARGIN, parseInt(hour / 10), ctx);
        this.randDigit(this.LEFT_MARGIN + 8 * this.D, this.TOP_MARGIN, hour % 10, ctx);

        this.randDigit(this.LEFT_MARGIN + 15 * this.D, this.TOP_MARGIN, 10, ctx);

        this.randDigit(this.LEFT_MARGIN + 19 * this.D, this.TOP_MARGIN, parseInt(minutes / 10), ctx);
        this.randDigit(this.LEFT_MARGIN + 27 * this.D, this.TOP_MARGIN, minutes % 10, ctx);

        this.randDigit(this.LEFT_MARGIN + 34 * this.D, this.TOP_MARGIN, 10, ctx);

        this.randDigit(this.LEFT_MARGIN + 38 * this.D, this.TOP_MARGIN, parseInt(second / 10), ctx);
        this.randDigit(this.LEFT_MARGIN + 46 * this.D, this.TOP_MARGIN, second % 10, ctx);

        /*绘制彩球*/
        for (let i = 0; i < this.balls.length; i++) {
          let aball = this.balls[i];
          ctx.fillStyle = aball.color;
          ctx.beginPath();
          ctx.arc(aball.x, aball.y, this.R, 0, 2 * Math.PI, true);
          ctx.closePath();
          ctx.fill();
        }
      },
      randDigit(x, y, num, ctx) {
        let dig = this.digit[num];
        for (let i = 0; i < dig.length; i++) {
          for (let j = 0; j < dig[i].length; j++) {
            // 该格要显示小球，就进行绘制
            if (dig[i][j] == 1) {
              let px = this.D * j + x; // x坐标
              let py = this.D * i + y; // y坐标
              ctx.fillStyle = "#303030"; // 小球颜色
              ctx.beginPath(); // 开始绘制路径
              ctx.arc(px, py, this.R, 0, 2 * Math.PI);//设置小球路径
              ctx.closePath(); // 结束绘制路径
              ctx.fill();
            }
          }
        }
      },
      update() {
        //下一秒显示数字
        let nextShowSeconds = this.getCurrentShowTimeSeconds();
        // 下一秒小时位显示数值
        let nextHour = parseInt(nextShowSeconds / 3600);
        // 下一秒分钟位显示数值
        let nextMinuts = parseInt(nextShowSeconds / 60 - nextHour * 60);
        // 下一秒秒位显示数值
        let nextSecond = nextShowSeconds % 60;

        // 当前小时位显示数值
        let curHour = parseInt(this.curShowTimeSeconds / 3600);
        // 当前分钟位显示数值
        let curMinuts = parseInt(this.curShowTimeSeconds / 60 - curHour * 60);
        // 当前秒位显示数值
        let curSecond = this.curShowTimeSeconds % 60;
        // 如果当前秒位与下一秒数值显示不同
        if (nextSecond != curSecond) {
          //判断下一秒小时位第一位数值是否变动
          if (parseInt(nextHour / 10) != parseInt(curHour / 10)) {
            //有变动产生变动的数值的彩球
            this.addBall(this.LEFT_MARGIN, this.TOP_MARGIN, parseInt(nextHour / 10));
          }
          //判断下一秒小时位第二位数值是否变动
          if ((nextHour % 10) != (curHour % 10)) {
            this.addBall(this.LEFT_MARGIN + 8 * this.D, this.TOP_MARGIN, nextHour % 10);
          }
          if (parseInt(nextMinuts / 10) != parseInt(curMinuts / 10)) {
            this.addBall(this.LEFT_MARGIN + 19 * this.D, this.TOP_MARGIN, parseInt(nextMinuts / 10));
          }
          if ((nextMinuts % 10) != (curMinuts % 10)) {
            this.addBall(this.LEFT_MARGIN + 27 * this.D, this.TOP_MARGIN, nextMinuts % 10);
          }
          if (parseInt(nextSecond / 10) != parseInt(curSecond / 10)) {
            this.addBall(this.LEFT_MARGIN + 38 * this.D, this.TOP_MARGIN, parseInt(nextSecond / 10));
          }
          if (nextSecond % 10 != curSecond % 10) {
            this.addBall(this.LEFT_MARGIN + 46 * this.D, this.TOP_MARGIN, nextSecond % 10);
          }
          // 更新当前展示数值为下一秒的数值
          this.curShowTimeSeconds = nextShowSeconds;
        }
        // 更新彩球
        this.updateBalls();
      },
      addBall(x, y, num) {
        let dig = this.digit[num];//获取数值
        for (let i = 0; i < dig.length; i++) {
          for (let j = 0; j < dig[i].length; j++) {
            //如果数值的当前格为1，则添加一个彩球
            if (dig[i][j] == 1) {
              let px = this.D * j + x;
              let py = this.D * i + y;
              let aball = {   //定义一个彩球对象
                x: px,
                y: py,
                color: this.ballColor[Math.floor(Math.random() * this.ballColor.length)],//随机一个颜色
                vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4, // x方向的速度 -4或者4
                vy: -5, // y方向的速度
                g: 1.5 + Math.random()// 重力加速度
              };
              this.balls.push(aball);   // 将彩球添加到彩球集合中
            }
          }
        }
      },
      updateBalls() {
        let cnt = 0;//有效彩球个数
        //遍历所有彩球
        for (let i = 0; i < this.balls.length; i++) {
          this.balls[i].x += this.balls[i].vx;
          this.balls[i].y += this.balls[i].vy;
          this.balls[i].vy += this.balls[i].g;
          //边缘碰撞检测，y方向
          if (this.balls[i].y >= this.HEIGHT - this.R) {
            this.balls[i].y = this.HEIGHT - this.R;
            this.balls[i].vy = -this.balls[i].vy * 0.2;
          }
          // 边缘碰撞检测，x方向
          if (this.balls[i].x + this.R >= 0 && this.balls[i].x + this.R <= this.WIDTH) {
            this.balls[cnt++] = this.balls[i]; // 还在画布内算作有效彩球
          }
        }
        // 控制彩球数量超出范围清除掉
        while (this.balls.length > Math.min(350, cnt)) {
          this.balls.pop();
        }
      },
      animated() {
        let self = this;
        //绘制数字
        self.drawDigit(self.context);
        //更新彩球数字
        self.update();
        // 动画使用requestAnimationFrame
        requestAnimationFrame(self.animated);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
