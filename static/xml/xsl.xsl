<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>My CD Collection</h2>  
  <xsl:apply-templates/> 
  </body>
  </html>
</xsl:template>

<xsl:template match="TITLE">
  Title: <span style="color:#ff0000">
  <xsl:value-of select="."/></span>
  <br />

</xsl:template>

<xsl:template match="ARTIST">
  Artist: <span style="color:#0000ff">
  <xsl:value-of select="."/></span>
  <br />
  <br />
</xsl:template>

</xsl:stylesheet>
