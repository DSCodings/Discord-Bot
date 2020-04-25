const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    message.channel.send(count);
    //var first = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
    if (!args[0]) return message.channel.send("Geef een argument mee");
    if (!args[1]) return message.channel.send("Geef een argument mee");
    var second = args[1]
    var firsssst = args[0]
    var count = 10 + 10;
    message.channel.send(count);
    message.channel.send("testendingtesten");
    var somsin = `${firsssst} + ${second}`
    console.log(firsssst);
    console.log(second);
    var test = firsssst + second;
    var test21235 = Number(firsssst) + Number(second);
    message.channel.send(test21235);
    console.log(test21235);
    var somsin22 = somsin
    message.channel.send(somsin22);
    if (somsin22 == "22"){
        message.channel.send("22")
        console.log("test")
    }

    var resul = 0;
    // if (args[0] == "1"){
    //     if (args[1] == "1"){
    //         if (args[2] == "1"){
    //             if (args[3] == "1"){
    //                 if (args[4] == "1"){
    //                     if (args[5] == "1"){
    //                         if (args[6] == "1"){
    //                             if (args[7] == "1"){
    //                                 if (args[8] == "1"){
    //                                     if (args[9] == "1"){
    //                                         resul = 10;
    //                                     }
    //                                     else if (args[9] == "2"){
    //                                         resul = 11;
    //                                     }
    //                                     else if (args[9] == "3"){
    //                                         resul = 12;
    //                                     }
    //                                     else if (args[9] == "4"){
    //                                         resul = 13;
    //                                     }
    //                                     else if (args[9] == "5"){
    //                                         resul = 14;
    //                                     }
    //                                     else if (args[9] == "6"){
    //                                         resul = 15;
    //                                     }
    //                                     else if (args[9] == "7"){
    //                                         resul = 16;
    //                                     }
    //                                     else if (args[9] == "8"){
    //                                         resul = 17;
    //                                     }
    //                                     else if (args[9] == "9"){
    //                                         resul = 18;
    //                                     }
    //                                     else if (args[9] == "10"){
    //                                         resul = 19;
    //                                     }
                                
    //                                 }
    //                                 else if (args[8] == "2"){
    //                                     if (args[9] == "1"){
    //                                         resul = 11;
    //                                     }
    //                                     else if (args[9] == "2"){
    //                                         resul = 12;
    //                                     }
    //                                     else if (args[9] == "3"){
    //                                         resul = 13;
    //                                     }
    //                                     else if (args[9] == "4"){
    //                                         resul = 14;
    //                                     }
    //                                     else if (args[9] == "5"){
    //                                         resul = 15;
    //                                     }
    //                                     else if (args[9] == "6"){
    //                                         resul = 16;
    //                                     }
    //                                     else if (args[9] == "7"){
    //                                         resul = 17;
    //                                     }
    //                                     else if (args[9] == "8"){
    //                                         resul = 18;
    //                                     }
    //                                     else if (args[9] == "9"){
    //                                         resul = 19;
    //                                     }
    //                                     else if (args[9] == "10"){
    //                                         resul = 20;
    //                                     }
    //                                 }
    //                                 else if (args[8] == "3"){
    //                                     if (args[9] == "1"){
    //                                         resul = 12;
    //                                     }
    //                                     else if (args[9] == "2"){
    //                                         resul = 13;
    //                                     }
    //                                     else if (args[9] == "3"){
    //                                         resul = 14;
    //                                     }
    //                                     else if (args[9] == "4"){
    //                                         resul = 15;
    //                                     }
    //                                     else if (args[9] == "5"){
    //                                         resul = 16;
    //                                     }
    //                                     else if (args[9] == "6"){
    //                                         resul = 17;
    //                                     }
    //                                     else if (args[9] == "7"){
    //                                         resul = 18;
    //                                     }
    //                                     else if (args[9] == "8"){
    //                                         resul = 19;
    //                                     }
    //                                     else if (args[9] == "9"){
    //                                         resul = 20;
    //                                     }
    //                                     else if (args[9] == "10"){
    //                                         resul = 21;
    //                                     }
    //                                 }
    //                                 else if (args[8] == "4"){
    //                                     if (args[9] == "1"){
    //                                         resul = 13;
    //                                     }
    //                                     else if (args[9] == "2"){
    //                                         resul = 14;
    //                                     }
    //                                     else if (args[9] == "3"){
    //                                         resul = 15;
    //                                     }
    //                                     else if (args[9] == "4"){
    //                                         resul = 16;
    //                                     }
    //                                     else if (args[9] == "5"){
    //                                         resul = 17;
    //                                     }
    //                                     else if (args[9] == "6"){
    //                                         resul = 18;
    //                                     }
    //                                     else if (args[9] == "7"){
    //                                         resul = 19;
    //                                     }
    //                                     else if (args[9] == "8"){
    //                                         resul = 20;
    //                                     }
    //                                     else if (args[9] == "9"){
    //                                         resul = 21;
    //                                     }
    //                                     else if (args[9] == "10"){
    //                                         resul = 22;
    //                                     }
    //                                 }
    //                                 else if (args[0] == "5"){
    //                                     if (args[9] == "1"){
    //                                         resul = 14;
    //                                     }
    //                                     else if (args[9] == "2"){
    //                                         resul = 15;
    //                                     }
    //                                     else if (args[9] == "3"){
    //                                         resul = 16;
    //                                     }
    //                                     else if (args[9] == "4"){
    //                                         resul = 17;
    //                                     }
    //                                     else if (args[9] == "5"){
    //                                         resul = 18;
    //                                     }
    //                                     else if (args[9] == "6"){
    //                                         resul = 19;
    //                                     }
    //                                     else if (args[9] == "7"){
    //                                         resul = 20;
    //                                     }
    //                                     else if (args[9] == "8"){
    //                                         resul = 21;
    //                                     }
    //                                     else if (args[9] == "9"){
    //                                         resul = 22;
    //                                     }
    //                                     else if (args[9] == "10"){
    //                                         resul = 23;
    //                                     }
    //                                 }
    //                                 else if (args[0] == "6"){
                                        
    //                                 }
    //                                 else if (args[0] == "7"){
                                        
    //                                 }
    //                                 else if (args[0] == "8"){
                                        
    //                                 }
    //                                 else if (args[0] == "9"){
                                        
    //                                 }
    //                                 else if (args[0] == "10"){
                                        
    //                                 }
                            
    //                             }
    //                             else if (args[0] == "2"){
                                    
    //                             }
    //                             else if (args[0] == "3"){
                                    
    //                             }
    //                             else if (args[0] == "4"){
                                    
    //                             }
    //                             else if (args[0] == "5"){
                                    
    //                             }
    //                             else if (args[0] == "6"){
                                    
    //                             }
    //                             else if (args[0] == "7"){
                                    
    //                             }
    //                             else if (args[0] == "8"){
                                    
    //                             }
    //                             else if (args[0] == "9"){
                                    
    //                             }
    //                             else if (args[0] == "10"){
                                    
    //                             }
                        
    //                         }
    //                         else if (args[0] == "2"){
                                
    //                         }
    //                         else if (args[0] == "3"){
                                
    //                         }
    //                         else if (args[0] == "4"){
                                
    //                         }
    //                         else if (args[0] == "5"){
                                
    //                         }
    //                         else if (args[0] == "6"){
                                
    //                         }
    //                         else if (args[0] == "7"){
                                
    //                         }
    //                         else if (args[0] == "8"){
                                
    //                         }
    //                         else if (args[0] == "9"){
                                
    //                         }
    //                         else if (args[0] == "10"){
                                
    //                         }
                    
    //                     }
    //                     else if (args[0] == "2"){
                            
    //                     }
    //                     else if (args[0] == "3"){
                            
    //                     }
    //                     else if (args[0] == "4"){
                            
    //                     }
    //                     else if (args[0] == "5"){
                            
    //                     }
    //                     else if (args[0] == "6"){
                            
    //                     }
    //                     else if (args[0] == "7"){
                            
    //                     }
    //                     else if (args[0] == "8"){
                            
    //                     }
    //                     else if (args[0] == "9"){
                            
    //                     }
    //                     else if (args[0] == "10"){
                            
    //                     }
                
    //                 }
    //                 else if (args[0] == "2"){
                        
    //                 }
    //                 else if (args[0] == "3"){
                        
    //                 }
    //                 else if (args[0] == "4"){
                        
    //                 }
    //                 else if (args[0] == "5"){
                        
    //                 }
    //                 else if (args[0] == "6"){
                        
    //                 }
    //                 else if (args[0] == "7"){
                        
    //                 }
    //                 else if (args[0] == "8"){
                        
    //                 }
    //                 else if (args[0] == "9"){
                        
    //                 }
    //                 else if (args[0] == "10"){
                        
    //                 }
            
    //             }
    //             else if (args[0] == "2"){
                    
    //             }
    //             else if (args[0] == "3"){
                    
    //             }
    //             else if (args[0] == "4"){
                    
    //             }
    //             else if (args[0] == "5"){
                    
    //             }
    //             else if (args[0] == "6"){
                    
    //             }
    //             else if (args[0] == "7"){
                    
    //             }
    //             else if (args[0] == "8"){
                    
    //             }
    //             else if (args[0] == "9"){
                    
    //             }
    //             else if (args[0] == "10"){
                    
    //             }
        
    //         }
    //         else if (args[0] == "2"){
                
    //         }
    //         else if (args[0] == "3"){
                
    //         }
    //         else if (args[0] == "4"){
                
    //         }
    //         else if (args[0] == "5"){
                
    //         }
    //         else if (args[0] == "6"){
                
    //         }
    //         else if (args[0] == "7"){
                
    //         }
    //         else if (args[0] == "8"){
                
    //         }
    //         else if (args[0] == "9"){
                
    //         }
    //         else if (args[0] == "10"){
                
    //         }
    
    //     }
    //     else if (args[0] == "2"){
            
    //     }
    //     else if (args[0] == "3"){
            
    //     }
    //     else if (args[0] == "4"){
            
    //     }
    //     else if (args[0] == "5"){
            
    //     }
    //     else if (args[0] == "6"){
            
    //     }
    //     else if (args[0] == "7"){
            
    //     }
    //     else if (args[0] == "8"){
            
    //     }
    //     else if (args[0] == "9"){
            
    //     }
    //     else if (args[0] == "10"){
            
    //     }

    // }
    // else if (args[0] == "2"){
        
    // }
    // else if (args[0] == "3"){
        
    // }
    // else if (args[0] == "4"){
        
    // }
    // else if (args[0] == "5"){
        
    // }
    // else if (args[0] == "6"){
        
    // }
    // else if (args[0] == "7"){
        
    // }
    // else if (args[0] == "8"){
        
    // }
    // else if (args[0] == "9"){
        
    // }
    // else if (args[0] == "10"){
        
    // }
    message.channel.send(resul);
    
    
}

module.exports.help = {
    name: "som",
    description: "for make a som"
}