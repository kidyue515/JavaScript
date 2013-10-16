/**
 * Created with JetBrains WebStorm.
 * User: wuyue
 * Date: 13-9-9
 * Time: 上午9:32
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function() {
    $('#f1').click(function () {
        $('#mainFrame').attr('src',"prototype/Payment_Office_Management.html");
    });
    $('#f2').click(function () {
        $('#mainFrame').attr('src',"prototype/Till_Management.html");
    });
    $('#f3').click(function () {
        $('#mainFrame').attr('src',"prototype/Payment_Management.html");
    });
    $('#f31').click(function () {
        $('#mainFrame').attr('src',"prototype/Payment_Capture.html");
    }).bind('click',function() {return false;}
    );
    $('#f32').click(function () {
        $('#mainFrame').attr('src',"prototype/Payment_Cancelation.html");
    }).bind('click',function() {return false;}
    );
    $('#f4').click(function () {
        $('#mainFrame').attr('src',"prototype/Deposit_Management.html");
    });

    $('#RET1').click(function () {
        $('#mainFrame').attr('src',"prototype/Search_Filing_Obligation.html");
    });
    $('#RET2').click(function () {
        $('#mainFrame').attr('src',"prototype/Search_Return.html");
    });
    $('#RET3').click(function () {
        $('#mainFrame').attr('src',"prototype/Search_Return_Request.html");
    });
    $('#RET4').click(function () {
        $('#mainFrame').attr('src',"prototype/Search_Batch.html");
    });
    $('#RET5').click(function () {
        $('#mainFrame').attr('src',"prototype/Search_Deemed_Assessment.html");
    });
    $('#RET6').click(function () {
        $('#mainFrame').attr('src',"prototype/Search_Extension_Request.html");
    });
	
	
    $('#REG1').click(function () {
        $('#mainFrame').attr('src',"prototype/Taxpayer_Registration_Application_Inquiry.html");
    });
    $('#REG2').click(function () {
        $('#mainFrame').attr('src',"prototype/Taxpayer_Inquiry.html");
    });	
    $('#REG3').click(function () {
        $('#mainFrame').attr('src',"prototype/Taxpayer_Request_Inquiry.html");
    });
    $('#REG4').click(function () {
        $('#mainFrame').attr('src',"prototype/Certificate_Inquiry.html");
    });
  });



