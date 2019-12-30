<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<div class="second-news" id="js_tiyu">
					<!--头-->
					<div id="tiyu_list" class="tiyu_list">
						<ul	>
							<li id="tiyu_title1" class="tiyu_title1">
								<a href="#">体育</a>
							</li>

							<li id="tiyu_title2" class="tiyu_title2">
								<a href="#">NBA</a>

								<a href="#">CBA</a>
							</li>

							<li id="tiyu_title3" class="tiyu_title3">
								<a href="#">中超</a>

								<a href="#">国际</a>
							</li>
						</ul>

						<ul	>
							<li style="b1order-top:2px solid blue;float:left;width:50px;height:49px;font-size: 14px;line-height: 49px;text-align: center;">
								<a href="" style="border:0px solid blue;font-size: 14px;text-decoration:none;color:#6B6B6B;">综合</a>
							</li>

							<li style="b1order-top:2px solid blue;float:left;width:50px;height:49px;font-size: 14px;line-height: 49px;text-align: center;">
								<a href="" style="border:0px solid blue;font-size: 14px;text-decoration:none;color:#6B6B6B;">跑步</a>
							</li>
							<li style="b1order-top:2px solid blue;float:left;width:50px;height:49px;font-size: 14px;line-height: 49px;text-align: center;">
								<a href="" style="border:0px solid blue;font-size: 14px;text-decoration:none;color:#6B6B6B;">策划</a>
							</li>
							<li style="b1order-top:2px solid blue;float:left;width:60px;height:49px;font-size: 14px;line-height: 49px;text-align: center;">
								<a href="" style="border:0px solid blue;font-size: 14px;text-decoration:none;color:#6B6B6B;">竞彩预测</a>
							</li>
						</ul>

					</div>
					<!--主要内容-->
					<div class="news-main-content" >
						<!--左-->
						<div class="news-main-content-left" >
							<div>
								<a href="">
									<img src="/News/static/img/music.jpg" style="width:200px;height:125px;border:0px solid blue;" />
								</a>
								<h3>替补上阵秒救主！请问谁不需要C罗？</h3>
							</div>

							<div>
								<a href="">
									<img src="/News/static/img/music.jpg" style="width:200px;height:125px;border:0px solid blue;" />
								</a>
								<h3>LBJ入每日观察 哈登小腿受伤出战成疑</h3>
							</div>
						</div>
						<!--中-->
						<div id="tiyu_list_con" class="news-main-content-center">
							<!--体育列表-->
							<div id="tiyu_connect1" class="tiyu_connect1" >
								
							</div>
							
							<!--中超列表-->
							<div id="tiyu_connect4" class="tiyu_connect4" >
							</div>
							<!--国际列表-->
							<div id="tiyu_connect5" class="tiyu_connect5" >
							</div>
						</div>
					</div>
				</div>
<table border="1">
<tr bgcolor="#9acd32">
<th>Title</th>
<th>Artist</th>
<th>COUNTRY</th>
<th>COMPANY</th>
</tr>
<xsl:for-each select="CATALOG/CD">
<tr bgcolor="red">
<td><xsl:value-of select="TITLE"/></td>
<td><xsl:value-of select="ARTIST"/></td>
<td><xsl:value-of select="COUNTRY"/></td>
<td><xsl:value-of select="COMPANY"/></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>

</xsl:stylesheet>