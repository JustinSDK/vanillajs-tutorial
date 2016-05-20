<%@page contentType="text/xml" pageEncoding="UTF-8"%><?xml version="1.0" encoding="UTF-8"?>
<select>
<%
    String result = null;
    switch(request.getParameter("category")) {
        case "theory":
            result = "<option value='algorithm'>常見演算</option>" +
                   "<option value='graphic'>電腦圖學</option>" +
                    "<option value='pattern'>設計模式</option>";
            break;
        case "language":
            result =  "<option value='c'>C 語言</option>" +
                     "<option value='cpp'>C++</option>" +
                      "<option value='java'>Java</option>" +
                      "<option value='python'>Python</option>" +
                      "<option value='javascript'>JavaScript</option>";
            break;
        case "web":
            result = "<option value='servlet'>Servlet</option>" +
                      "<option value='jsp'>JSP</option>" +
                      "<option value='struts'>Struts</option>" +
                      "<option value='springmvc'>Spring MVC</option>";
            break;
        default:
            result = "<option>-- 沒有次選項 --</option>";
    }
    out.print(result);
%>
</select>