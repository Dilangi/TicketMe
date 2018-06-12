//% mark and numerical values
    printf("\n that has %d%% discount \n / %d%%",40,30);

    //scanf
    int a,b;
    printf("get two numbers:");
    scanf("%d%d",&a,&b);
    printf("sum=%d",a+b);

    //when input is int but equation has floats.
    int mile,yard;
    printf("input distance:");
    scanf("%d%d",&mile,&yard);
    printf("distance in kms: %f",(mile +  (yard/1760)*1.609));

    //display with spaces
    char char1, char2, char3;
    int int1;
    float float1;
    double dbl1;

    printf("inputs 3 characters, 1 integer, 1 float adn a double: ");
    scanf("%c%c%c%d%f%lf",&char1,&char2,&char3,&int1,&float1,&dbl1);
    printf("your input are %3c%c%c%c%d%f%lf");

    //prefix and postfix increament
    int x,y,a,b;
    x=10;
    y=++x;

    a=10;
    b=a++;

    printf("x=%d, y=%d, a=%d, b=%d", x,y,a,b);//resulting x=y=a=11,b=10